    <template>
        <footer id="footer">
        <div class="footer_inner" style="background: #f5f5f5;">
            <div class="inner w100 inner1104 m_center flex">
                <div class="ft_logo pc_view" @click="goLogin()" style="display: flex;flex-direction: column;align-items:center;">
                        <img src="@/assets/img/music_canvas.png" alt="" style="width:100%;">
                        <div style="align-items: center;font-size: 12px;font-weight: 900;color: #7c4672;text-align: center;">OUR.PLAY<br>LIST</div>
                </div>
                <div style="width:70%">
                    <div class="ft_info flex fs16 fc3 fxwrap">
                        <div>우리의 플레이리스트</div>
                        <div>사업자등록   000-00-00000</div>
                        <div>통신판매업신고   제 2023-서울용산-00000</div>
                        <br class="pc_view">
                        <div >서울 용산구 한강대로</div>
                        <div >가입 문의: 010-1234-1234</div>
                    </div>
                    <div class="copy fs16 fwt600 fc4">COPYRIGHT © PLAYLIST.OUR RIGHTS RESERVED.</div>
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
    