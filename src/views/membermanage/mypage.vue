<template>
  <div id="mypage" class="pt52">
    <div class="inner m_center w100 inner1034">
      <div class="content flex alstart justy_btw">
        <!-- 좌측 탭 -->
        <div class="my_navi pc_view">
          <div class="title fwt600 fs30">내 정보</div>
          <ul class="tab fwt500 fs18 fc11">
            <li class="pointer on">내가 등록한 인터뷰</li>
            <li class="pointer">내 계정 정보</li>
          </ul>
        </div>

        <!-- 우측 내가 등록한 인터뷰 -->
        <div class="my_posting my_box active">
          <div class="title fs35 fwt600">
            내가 등록한<br class="mo_view" />
            인터뷰
          </div>
          <ul class="poasting_list">
            <li v-for ="(item,index) in state.mylist" :key="index" class="list flex alc br5 justy_btw rel">
              <div class="subj">
                <a href="" class="flex column">
                  <div class="tit fs16">
                    {{ item.title }}
                  </div>
                  <div class="date fs13 fwt500 fc12">등록일자 : {{ item.regDate }}</div>
                </a>
              </div>
              <div class="btn_area flex">
                <button class="update_btn btn_black">
                  <a href="" class="inblock"
                  @click="modalOpen('postUpdate',item)">수정</a>
                </button>
                <button
                  class="delete_btn btn_border"
                  @click="modalOpen('postDelete',item);"
                >
                  <em class="inblock">삭제</em>
                </button>
              </div>
            </li>
          </ul>
        </div>

        <!-- 우측 내 계정 정보 -->
        <div class="my_account my_box">
          <div class="title fs35 fwt600">내 계정 정보</div>

          <ul class="account_list pc_view">
            <li class="sns_list list flex alc">
              <img src="@/assets/img/sns_kakao.svg" alt="" class="on" />
              <img src="@/assets/img/sns_naver.svg" alt="" />
              <img src="@/assets/img/sns_google.svg" alt="" />
            </li>
            <li class="list felx alc fs18 fwt500">
              <span class="opt inblock">아이디(이메일)</span>
              <em class="value">hh_1202@naver.com</em>
            </li>
            <li class="list felx alc fs18 fwt500 password">
              <span class="opt inblock">비밀번호</span>
              <em class="value">************</em>
              <button
                class="change_btn btn_border fs18 fwt600"
                @click="modalOpen('changePswd');"
              >
                <em>변경</em>
              </button>
            </li>
            <li class="list felx alc fs18 fwt500">
              <span class="opt inblock">이름</span>
              <em class="value">김현희</em>
            </li>
            <li class="list felx alc fs18 fwt500">
              <span class="opt inblock">핸드폰 번호</span>
              <em class="value">010-93495-5709</em>
            </li>
          </ul>

          <div class="account_list mo_view">
            <li class="sns_list list flex alc">
              <img src="@/assets/img/sns_kakao.svg" alt="" class="on" />
              <img src="@/assets/img/sns_naver.svg" alt="" />
              <img src="@/assets/img/sns_google.svg" alt="" />
            </li>
            <div class="flex">
              <div class="list">
                <div class="fs14">
                  <div class="opt fwt500">이름</div>
                  <div class="value">김용산</div>
                </div>
                <div class="fs14">
                  <div class="opt fwt500">아이디(이메일)</div>
                  <div class="value">hyuneek28@gmail.com</div>
                </div>
                <div class="fs14 flex password alc">
                  <div>
                    <div class="opt fwt500">비밀번호</div>
                    <div class="value">************</div>
                  </div>
                  <button
                    class="change_btn btn_black"
                    @click="modalOpen('changePswd');"
                  >
                    변경
                  </button>
                </div>
              </div>
              <div class="lst">
                <div class="fs14">
                  <div class="opt fwt500">핸드폰 번호</div>
                  <div class="value">010-3388-8833</div>
                </div>
              </div>
            </div>
          </div>

          <button class="secession_btn btn_border fs18 fwt500">
            <a href="withdraw.html" class="inblock">회원탈퇴</a>
          </button>
        </div>
      </div>
    </div>
  </div>
  <Modal></Modal>

</template>
<script>

import { onMounted, onUnmounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {_getMyRegInterview, _delPost
} from '@/api/moviewApis.js';
import Modal from '@/views/modal/modal.vue';

export default {
    components: {Modal},
    setup() {
        onMounted(() => {
            emitter.$on('_postDelete', postDeleteCallback);
            getMyRegInterview();
        });
        onUnmounted(() => {
            emitter.$off('_postDelete', postDeleteCallback);
        });
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            mylist: []
        });
        const postDeleteCallback = async (param) => {
            const response = await _delPost(param);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('등록한 인터뷰가 삭제 되었습니다');
                    emitter.$emit('modalOpen', 'postDelcomp');
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }

        };
        //마이페이지 - 내가 등록한 인터뷰 리스트 조회
        const getMyRegInterview = async () => {
            const param = {userId: ''
            };
            const response = await _getMyRegInterview(param);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    state.mylist = response.data.data.mylist;
                    console.log('내가 등록한 인터뷰 리스트가 조회 되었습니다');
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }

        };
        //마이페이지 - 모달 오픈
        const modalOpen = (v, item) => {
          
            emitter.$emit('modalOpen', v, item);
        };

        return {
            state,
            modalOpen
        };
    }
};

</script>