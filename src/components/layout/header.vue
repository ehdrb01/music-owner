<template>
    <header id="header">
        <div class="header_inner bc1 fixed w100 top0 bc_01">
            <!-- <div style="color: ;">{{state.storeInfo}}//{{ state.isStore }}//</div> -->
            <div class="inner inner1093 w100 m_center flex justy_btw alc bc_01">
                <div class="header_title">
                    <div v-if="route.params.storeNo" class="left" @click="goList">
                        <img :class="$route.name == 'index'?'sel':''" src="@/assets/img/music_list_sel.png" alt="" style="width: 88%; height: 74%;">
                        <!-- <img v-else src="@/assets/img/music_list.png" alt="" style="width:100%;"> -->
                    </div>
                    <div class="title">
                        {{ $route.name ==
                            'index' ? '음악신청하기' :
                            $route.name == 'playlist' ? '플레이리스트' :
                                $route.name == 'adminLogin' ? '관리자로그인' :
                                    $route.name == 'manageStore' ? '스토어관리' :
                                        'MUSIC OWNER' }}
                    </div>
                    <div v-if="route.params.storeNo" class="right" @click="goMain" v-show="state.storeInfo?.userType!='store'">
                        <img :class="$route.name == 'playlist'?'sel':''" src="@/assets/img/music_write_sel.png" alt="" style="width: 88%; height: 80%;">
                        <!-- <img v-else src="@/assets/img/music_write.png" alt="" style="width:100%;"> -->
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
    components: {},
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            path: useRoute().path,
            storeInfo: {},
            isStore: false
        });
        onMounted(() => {
            getStoreInfo();
            emitter.$on('getStoreInfoHeader', (data) => {
                state.storeInfo = data;
                console.log('getStoreInfo header');
                // getStoreInfo();
                // state.storeInfo = data;
                // console.log('getStoreInfo header');
                // console.log(data);
                // getStoreInfo();
            });
        });
        const getStoreInfo = () => {
            state.storeInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (state.storeInfo?.userType == 'store') {
                state.isStore = true;
            } else {
                state.isStore = false;
            }
        };
        const goList = () => {
            router.push({
                path: '/playlist/' + route.params.storeNo
            });
        };
        const goMain = () => {
            router.push({
                path: '/index/' + route.params.storeNo
            });
        };

        return { state, route, goList, goMain };
    }
};
</script>
<style></style>
