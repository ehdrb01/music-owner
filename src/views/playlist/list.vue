<template>
  <div id="list" class="pt52">
    <!-- 리스트 카테고리 -->
    <div class="cate">
      <div class="inner t_center inner1104" style="margin:0 auto;">
        <div class="title fs35 fwt600">
          <div>
            <ul class="lst_area">
              <li>
                <!-- <div class="tit fs17 fwt500">상호명</div> -->
                <input type="text" class="wrt_ipt readonly store_name" :value="state.store.storeNm+'의 플레이리스트'" readonly="readonly">
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
          <ul class="comp_lst flex fxwrap">
            <!-- 리스트 each-->
            <li v-for="(item, index) in state.musiclist" :class="item.openYn == 'N' ? 'h50' : 'h350'" :key="index"
              class=" playing">
              <div class="music_list">
                <div class="icon">
                  <i class="bi bi-headphones"></i>
                </div>
                <div class="music_info">
                  <div class="singer">{{ item.reqSingerNm }}</div>
                  <div class="float">-</div>
                  <div class="song">{{ item.reqSongNm }}</div>
                </div>
                <div class="type"> 일반</div>
                <div class="play_icon" @click="playMusic(item)"><i class="bi bi-youtube"></i></div>
                <div v-if="state.storeInfo.adminYn==true" class="type" @click="nextMusic(item)">재생완료하기</div>
                <!-- <div class="play_icon" @click="nextMusic(item)"><i class="bi bi-chevron-bar-right"></i></div> -->
              </div>
              <div class="player" :class="item.openYn == 'N' ? 'h0' : 'h300'" v-if="item.openYn == 'Y'">
                <iframe width="100%" height="300" :src="item.musicUrl" title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </li>
            <div class="not_playlist" v-if="state.musiclist.length == 0">
              <i class="bi bi-chat-dots"></i>신청곡이 없습니다.
            </div>
            <!-- 리스트 !each-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { _getMusicList, _updateMusic, _getStore } from '@/api/ourplay.js';
export default {
    components: {},
    props: ['storeNo'],
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            musiclist: [],
            store: {},
            storeInfo: {}
        });
        onMounted(() => {
            state.storeInfo =  JSON.parse(localStorage.getItem('userInfo'));
            if (state.storeInfo?.storeNo == route.params.storeNo
             && state.storeInfo?.userType == 'store') {
                state.storeInfo.adminYn = true;
            }
            getStore();
            getMusicList();
        });
    // 음악재생 이동
        const playMusic = (v) => {
            state.musiclist.forEach(element => {
                if (element.reqSongNo != v.reqSongNo) {
                    element.openYn = 'N';
                }
            });
            console.log(v.openYn);
            if (v.openYn == 'N') {
                v.openYn = 'Y';
            } else {
                v.openYn = 'N';
            }
            console.log(v.openYn);
        };
    //다음음악
        const nextMusic = (v) => {
            console.log(v.reqSongNo);
      //재생처리
            playedMusic(v.reqSongNo);

        };
        const playedMusic = async (v) => {
            const param = {
                reqSongNo: v,
                playedYn: 'Y'
            };
            const response = await _updateMusic(param);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log(param.reqSongNo + '곡 재생완료');
          //불러오기
                    getMusicList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }

        };
    //리스트 조회
        const getMusicList = async () => {
            const response = await _getMusicList(route.params.storeNo);
            try {
                if (response.data.code === 200) {
                    response.data.data.list.forEach(element => {
                        element.openYn = 'N';
                    });
                    state.musiclist = response.data.data.list;
                    console.log(response);
                    console.log('getMusicList 조회 되었습니다');
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
                    console.log(response.data.data);
                    state.store = response.data.data;
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        return {
            state,
            playMusic,
            nextMusic,
            getMusicList,
            getStore
        };
    }
};
</script>
<style scoped></style>
