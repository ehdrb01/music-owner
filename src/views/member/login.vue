<template>
  <div id="login" class="pt52">
    <div class="inner inner354 m_center w100">
      <div class="content">
        <div class="title fs35 fwt600 t_center">로그인</div>

        <form action="">
          <div class="login_form flex column">
            <input type="text" placeholder="아이디(ID)" />
            <input type="password" placeholder="비밀번호(Password)" />
            <button type="submit" class="submit_btn btn_black fs18 fwt600">
              로그인
            </button>
          </div>
        </form>

        <ul class="sns_login flex justy_cnt">
          <li>
            <a href=""><img src="@/assets/img/sns_kakao.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/img/sns_naver.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/img/sns_google.svg" alt="" /></a>
          </li>
        </ul>

        <ul class="link_btn_area flex fc13 fs14 justy_cnt">
          <li><a @click="goSign()">회원가입</a></li>
          <li><a @click="goFindId()">아이디 찾기</a></li>
          <li><a @click="goFindPassword()">비밀번호 찾기</a></li>
        </ul>
      </div>
    </div>
  </div>
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
        const goSign = () => {
            router.push({
                path: '/sign'
            });
        };
        //아이디 찾기 이동
        const goFindId = () => {
            router.push({
                path: '/findId'
            });
        };
        //비밀번호 찾기 이동
        const goFindPassword = () => {
            router.push({
                path: '/findPassword'
            });
        };
        return {state, goSign, goFindId, goFindPassword};
    }
};
</script>
