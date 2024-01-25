<template>
    <div id="list">
        <div v-if="state.store">
            <!-- 리스트 카테고리 -->
            <div class="cate">
                <div class="inner t_center inner1104" style="margin:0 auto;">
                    <div class="title fs35 fwt600">
                        <div>
                            <ul class="lst_area">
                                <li>
                                    <!-- <div class="tit fs17 fwt500">상호명</div> -->
                                    <input type="text" class="wrt_ipt readonly store_name"
                                        :value="state.store.storeNm + '의 플레이리스트 (' + state.nowTimer + ')'"
                                        readonly="readonly">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 리스트 컨텐츠 -->
            <div class="content bc8 " id="playlist">
                <div class="inner inner1104 w100 m_center">
                    <!-- 공통 리스트 디자인 -->
                    <div id="comp_lst_area">
                        <ul class="comp_lst flex fxwrap" v-if="state.musiclist.length > 0">
                            <!-- 리스트 each-->
                            <li v-for="(item, index) in  state.musiclist "
                                :class="state.storeInfo?.adminYn && item.playingYn == 'Y' ? 'h350' : 'h40'" :key="index"
                                class=" playing">
                                <div class="music_list" :class="item.playingYn == 'Y' ? 'glow' : ''">
                                    <div class="icon" :class="item.playingYn == 'Y' ? 'green' : 'red'">
                                        <i class="bi bi-headphones"></i>
                                    </div>
                                    <div class="music_info">
                                        <div class="singer">{{ item.reqSingerNm }}</div>
                                        <div class="float">-</div>
                                        <div class="song">{{ item.reqSongNm }}</div>
                                    </div>
                                    <div class="type" :class="item.playingYn == 'Y' ? 'green' : ''"> {{
                                        item.playingYn == 'Y' ? '재생중' : '일반'
                                    }}
                                    </div>
                                    <!-- @click="playMusic(item)" -->
                                    <!-- <div v-if="state.storeInfo?.adminYn == true" class="play_icon"><i class="bi bi-youtube"></i></div> -->
                                    <!-- @click="nextMusic(item)" -->
                                    <!-- <div v-if="state.storeInfo?.adminYn == true" class="type">완료하기</div> -->
                                </div>
                                <div class="player"
                                    :class="state.storeInfo?.adminYn && item.playingYn == 'Y' ? 'h300' : 'h0'"
                                    v-if="state.storeInfo?.adminYn && item.playingYn == 'Y'">
                                    <iframe width="100%" height="300" :src="item.musicUrl" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                            </li>
                            <!-- 리스트 !each-->
                        </ul>
                        <div class="not_playlist" v-else-if="state.musiclist.length == 0">
                            <i class="bi bi-chat-dots"></i>신청곡이 없습니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="not_playlist" v-if="!state.store">
            <i class="bi bi-chat-dots"></i>존재하지 않는 스토어 입니다.
        </div>
    </div>
</template>
<script>
import { onMounted, reactive, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { _getMusicList, _updateMusic, _getStore, _initMusicList, _getLastPlayed } from '@/api/ourplay.js';
export default {
    components: {},
    props: ['storeNo'],
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            musiclist: [],
            insideList: [],
            store: {},
            storeInfo: {},
            isFirstExecution: true,
            nowTimer: 0,
            lastPLayed: 0,
            lastCalled: 0,
            timer: 4 * 60 * 1000,
            intervalReady: null,
            intervalGoMs: null,
            intervalGetMs: null

        });
        watch(state.insideList, (newValue, oldValue) => {
            console.log('insideList 변경' + newValue + '/' + oldValue);
            // newValue, oldValue;
        }, {
            immediate: true,
            deep: true
        });
        onMounted(async () => {
            getStore();
            lastPLayed();
            state.storeInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (state.storeInfo?.storeNo == route.params.storeNo
                && state.storeInfo?.userType == 'store') {
                state.storeInfo.adminYn = true;

                clearInterval(state.intervalReady);
                clearInterval(state.intervalGoMs);
                clearInterval(state.intervalGetMs);

                goMusic();
                // eslint-disable-next-line no-const-assign
                state.intervalReady = setInterval(() => {
                    getReadyMusic();
                }, 5000);
                // eslint-disable-next-line no-const-assign
                state.intervalGoMs = setInterval(() => {
                    goMusic();
                }, state.timer);
            } else {
                state.intervalGetMs = setInterval(() => {
                    getMusicList();
                }, 5 * 1000);
            }


            setInterval(() => {
                state.nowTimer++;
            }, 1000, true);

        });
        const playedMusic = async () => {
            const param = {
                reqSongNo: state.musiclist[0].reqSongNo,
                playedYn: 'Y',
                playingYn: 'N'
            };
            const response = await _updateMusic(param);
            try {
                if (response.data.code === 200) {
                    console.log('playedMusic >>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    // getMusicList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };

        const playingMusic = async () => {
            const param = {
                reqSongNo: state.musiclist[0].reqSongNo,
                playingYn: 'Y'
            };
            const response = await _updateMusic(param);
            try {
                if (response.data.code === 200) {
                    getMusicList();
                    console.log('playingMusic>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    console.log(param.reqSongNo);

                } else {
                    console.log(response.data.message);
                }
                // return v;
            } catch (e) {
                console.log(e);
            }
        };

        const getMusicList = async () => {
            const param = {
                reqStoreNo: route.params.storeNo
            };
            const response = await _getMusicList(param);
            try {
                if (response.data.code === 200) {
                    console.log('getMusicList>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    console.log(response);
                    state.musiclist = response.data.data.list;
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const getStore = async () => {
            const response = await _getStore(route.params.storeNo);
            try {
                if (response.data.code === 200) {
                    console.log('getStore>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    console.log(response.data.data);
                    state.store = response.data.data;
                    initMusicList(state.store);
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const initMusicList = async () => {
            const param = {
                reqStoreNo: route.params.storeNo
            };
            const response = await _initMusicList(param);
            try {
                if (response.data.code === 200) {
                    console.log('initMusicList>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    // console.log(response.data.data);
                    // state.store = response.data.data;
                    // initMusicList(state.store);
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }

        };

        const getReadyMusic = async () => {
            console.log('곡 수집중');
            const param = {
                reqStoreNo: route.params.storeNo
            };
            const response = await _getMusicList(param);
            try {
                if (response.data.code === 200) {
                    if (state.musiclist.length == 0 && response.data.data.list.length > 0) {
                        location.reload();
                        // state.musiclist = response.data.data.list;
                        // console.log(state.insideList);
                    }
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const lastPLayed = async () => {
            const param = {
                reqStoreNo: route.params.storeNo
            };
            const response = await _getLastPlayed(param);
            try {
                if (response.data.code === 200) {
                    console.log('lastPlayed songNo:' + response.data.data);
                    state.lastPLayed = response.data.data;
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }

        };
        const goMusic = () => {
            getMusicList().then(() => {
                if (state.musiclist.length > 0) {
                    playingMusic().then(() => {
                        state.nowTimer = 0;
                        setTimeout(() => {
                            playedMusic();
                        }, state.timer - (10 * 1000));
                    });
                }
            });
        };
        return {
            state,
            getMusicList,
            getStore,
            playingMusic,
            route
        };
    }
};
</script>
<style scoped></style>
