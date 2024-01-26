    <template>
        <footer id="footer"  style="background: #f5f5f5;">
        <div class="footer_inner">
            <div class="inner w100 inner1104 m_center flex">
                <div class="ft_logo pc_view" @click="goLogin()" style="display: flex;flex-direction: column;align-items:center;">
                    <!-- <img style="width:100%;height:100%;" src="@/assets/img/logo1.png" alt="" /> -->
                        <!-- <img src="@/assets/img/music_canvas.png" alt="" style="width:100%;"> -->
                        <div style="align-items: center;font-size: 12px;font-weight: 900;color: #7c4672;text-align: center;margin-top:7px">MUSIC-<br>OWNER</div>
                </div>
                <div style="width:70%">
                    <div class="ft_info  fs16 fc3 ">
                        <!-- <div>MUSIC OWNER</div> -->
                        <!-- <div>사업자등록 000-00-00000</div> -->
                        <div class="copy fs16 fwt600 fc4">Copyright 2024. MUSIC OWNER All rights reserved.</div>
                        <div>통신판매업신고   제 2023-서울용산-00000</div>
                        <div style="cursor: pointer;float:left;" v-if="!state.storeInfo" @click="goLogin"> [관리자모드] </div>
                        <div v-if="state.storeInfo"  @click="goLogout">
                            <div style="float:left;">loginID : {{state.storeInfo.userId||state.storeInfo.id}}</div>
                            <div style="cursor: pointer;float:left;">[로그아웃] </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
    </template>
<script>
import { reactive, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            storeInfo: {}
        });
        onMounted(() => {
            getStoreInfo();
            
            emitter.$on('getStoreInfoFooter', (data) => {
                state.storeInfo = data;
                console.log('getStoreInfo footer');
            });
        });
        
        const getStoreInfo = () => {
            state.storeInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (state.storeInfo?.userType == 'store') {
                console.log('state.storeInfo조회');
                console.log(state.storeInfo);
                state.isStore = true;
            } else {
                state.isStore = false;
            }
        };
            //회원가입 이동
        const goLogin = () => {
            router.push({
                path: '/adminLogin'
            });
        };
        const goLogout = () => {
            // localStorage.removeItem('userInfo');
            getStoreInfo();
            localStorage.clear();
            alert('로그아웃 되었습니다');
            window.location.reload(true);
        };
       
        return {state, goLogin, goLogout};
    }
};
</script>
    