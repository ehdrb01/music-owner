    <template>
        <footer id="footer">
        <div class="footer_inner" style="background: #f5f5f5;">
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
                        <div>통신판매업신고   제 2023-서울용산-00000   <label @click="goLogin"> [관리자모드]</label></div>
                        <div >가입 문의: 010-1234-1234  </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
    </template>
<script>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
    
        });
            //회원가입 이동
        const goLogin = () => {
            router.push({
                path: '/adminLogin'
            });
        };
        
        return {state, goLogin};
    }
};
</script>
    