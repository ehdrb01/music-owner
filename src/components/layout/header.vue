<template>
    <header id="header">
        <div class="header_inner bc1 fixed w100 top0 bc_01">
            <div class="inner inner1093 w100 m_center flex justy_btw alc bc_01">
                <div class="header_title">
                    <div class="left" @click="goList" v-show="!state.isAdmin">
                        <i class="bi bi-music-player-fill"></i>
                    </div>
                    <div class="title">
                        {{ $route.name ==
                            'index' ? '음악신청하기' :
                            $route.name == 'playlist' ? '플레이리스트' :
                                $route.name == 'adminLogin' ? '관리자로그인' :
                                    $route.name == 'manageStore' ? '스토어관리' :
                                        'MUSIC OWNER' }}
                    </div>
                    <div class="right" @click="goMain" v-show="!state.isAdmin">
                        <i class="bi bi-signal"></i>
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
            isAdmin: false
        });
        onMounted(() => {
            state.storeInfo = JSON.parse(localStorage.getItem('userInfo'));
            // if (state.storeInfo?.userType == 'admin') {
            //     state.isAdmin = true;
            // } else {
            //     state.isAdmin = false;
            // }
        });

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
