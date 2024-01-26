<template>
  <div id="login" class="pt53">
    <div class="inner inner354 m_center w100">
      <div class="content">
        <div class="title fs35 fwt600 t_center">로그인</div>

        <div class="login_form flex column">
          <input type="text" placeholder="아이디(ID)" v-model="state.param.userId" />
          <input type="password" placeholder="비밀번호(Password)" v-model="state.param.password" @keyup.enter="login" />
          <div class="login_error_txt" v-show="state.errorText.length > 0">
            {{ state.errorText }}
          </div>
          <button class="submit_btn btn_black fs18 fwt600" @click="login">
            로그인
          </button>
        </div>

        <!-- <ul class="sns_login flex justy_cnt">
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
        </ul> -->
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { _login, _getStoreNo } from '@/api/ourplay.js';
export default {
    setup() {
        // const { emit } = getCurrentInstance();
        const router = useRouter();
        const route = useRoute();
        const store = useStore();
        const state = reactive({
            errorText: '',
            param: {
                userId: '',
                password: ''
            }
        });
        const login = async () => {
            localStorage.clear();
            const response = await _login(state.param);
            console.log('response');
            console.log(response.data.data);
            try {
                if (response.data.code === 200) {
                    if (response.data.data.userType == 'admin') {
                        store.dispatch('authModule/loginAction',
                            { id: state.param.userId, pass: state.param.password, token: response.data.data.token, userType: response.data.data.userType });
                        state.errorText = '';
                        router.push('/manageStore');

                    } else if (response.data.data.userType == 'store') {
                        getStoreList();
                    }
                    emitter.$emit('getStoreInfoFooter', response.data.data);
                    emitter.$emit('getStoreInfoHeader', response.data.data);
                } else if (response.data.code === 2001 || response.data.code === 2002) {
                    state.errorText = '비밀번호를 확인해주세요';
                } else if (response.data.code === 2004) {
                    state.errorText = '아이디를 확인해주세요';
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const getStoreList = async () => {
            const response = await _getStoreNo(state.param.userId);
            try {
                if (response.data.code === 200) {
                    console.log(response.data.data.storeNo);
                    store.dispatch('authModule/loginAction',
                        { id: state.param.userId, pass: state.param.password, token: response.data.data.token, userType: 'store', storeNo: response.data.data.storeNo });
                    state.errorText = '';
                    router.push({
                        path: '/playlist/' + response.data.data.storeNo
                    });


                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        return { state, login };
    }
};
</script>
