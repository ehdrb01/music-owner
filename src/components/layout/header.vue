<template>
  <header id="header">
    <div class="header_inner bc1 fixed w100 top0">
      <div class="inner inner1093 w100 m_center flex justy_btw alc">
        <div class="logo">
          <a class="img" @click="goIndex">
            <img src="@/assets/img/logo.png" alt=""/></a>
        </div>
        <div class="menu flex alc">
           <!-- <div class="fc8 fs14">
              <a href="">로그아웃</a>
            </div>
            <div class="fs14 fwt500 login_btn fc0">
                <a @click="goMypage()" class="block bc6">내 정보</a>
            </div> -->
          <div class="fc8 fs14" @click="goSign()">
            회원가입
          </div>
          <div class="fs14 fwt500 login_btn fc0"  @click="goLogin()">
            <a class="block bc6">로그인</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
    components: {},
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
          
        });
        const goLogin = () => {
            router.push({
                path: '/login'
            });
        };
        const goSign = () => {
            router.push({
                path: '/sign'
            });
        };
        const goMypage = () => {
            router.push({
                path: '/mypage'
            });
        };
        const goIndex = () => {
            router.push({
                path: '/'
            });
        };

        return {state, goLogin, goSign, goIndex, goMypage};
    }
};
</script>
<style></style>
