<template>
  <div class="modal_wrap fixed w100 h100 top0 left0">
    <div class="modal_bg h100" @click="modalClose"></div>

    <!--뷰페이지 지원&문의하기 -->
    <div
      id="viewApplyModal"
      class="modal_box modal_apply abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">문의 및 지원</div>
        <div class="sent t_center fs16 fwt500 w100">
          인터뷰에 적힌 상세내용과 <br />
          담당자 정보를 확인 후 <br />
          담당자에게 연락을 남겨주세요.
        </div>
        <ul class="apply_box w100 inner260">
          <li>
            <span>담당자명</span>
            {{ state.manager.managerName }}
          </li>
          <li>
            <span>전화번호</span>
            {{ state.manager.managerPhone }}
            <!-- 010-2023-2829 -->
          </li>
          <li>
            <span>이메일</span>
            {{ state.manager.managerEmail }}
            <!-- Customerinterview@naver.com -->
          </li>
        </ul>
        <!-- <button class="btn_black w100 inner260" @click="modalClose;">확인</button> -->
      </div>
      <div class="cancel_btn abs img pointer" @click="modalClose">
        <img src="@/assets/img/cancel_icon.png" alt="" />
      </div>
    </div>

    <!--비밀번호 변경 -->
    <div
      id="changePswdModal"
      class="modal_box modal_change_pass abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">비밀번호 변경하기</div>

        <form action="" class="w100 change_pass_area m_center">
          <div class="change_pass_cont flex column">
            <label for="" class="fs16 fwt500">기존 비밀번호</label>
            <input type="text" placeholder="비밀번호 입력하기" />
            <p class="fs13 fwt500 fc7">비밀번호를 올바르게 입력해주세요.</p>
          </div>
          <div class="change_pass_cont flex column">
            <label for="" class="fs16 fwt500">새로운 비밀번호</label>
            <input
              type="text"
              placeholder="8자 이상, 영문/숫자/특수문자 포함"
            />
            <input type="text" placeholder="비밀번호 재입력" />
            <p class="fs13 fwt500 fc7">비밀번호를 올바르게 입력해주세요.</p>
            <p class="fs13 fwt500 fc7">기존과 다른 비밀번호를 입력해주세요.</p>
          </div>
        </form>

        <button class="btn_black w100 inner260">변경하기</button>
      </div>
      <div class="cancel_btn abs img pointer" @click="modalClose">
        <img src="@/assets/img/cancel_icon.png" alt="" />
      </div>
    </div>

    <!--비밀번호 변경완료 -->
    <div
      id="changePswdCompModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">변경완료</div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          비밀번호 변경이 완료되었습니다.
        </div>
        <button class="btn_black w100 inner260">확인</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--비밀번호 변경실패 -->
    <div
      id="changePswdFailModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">변경실패</div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          비밀번호는 일주일에 한번만<br />
          변경이 가능합니다.<br /><br />
          다음에 이용해주세요!
        </div>
        <button class="btn_black w100 inner260">확인</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--비밀번호 재설정 -->
    <div
      id="newPswdModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">
          비밀번호 재설정<br />링크를 보냈어요
        </div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          이메일 주소<br />
          hyuneek28@gmail.com
        </div>
        <button class="btn_black w100 inner260">로그인하러 가기</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--게시글 등록 -->
    <div
      id="postEnrollModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">인터뷰 등록 완료</div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          고객들의 목소리를 듣기 위한<br />
          첫 단계를 완료하셨어요!
        </div>
        <button class="btn_black w100 inner260">등록한 인터뷰 바로가기</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--게시글 수정 -->
    <div
      id="postUpdateModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">인터뷰 수정 완료</div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          인터뷰 수정을 완료하였습니다.
        </div>
        <button class="btn_black w100 inner260">등록한 인터뷰 바로가기</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--게시글 삭제 -->
    <div
      id="postDeleteModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">
          정말<br class="pc_view" />
          삭제하시겠습니까?
        </div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          삭제하시면<br />
          정보를 다시 되살릴 수 없습니다.
        </div>
        <button class="btn_black w100 inner260" @click="modalClose">삭제하기</button>
      </div>
      <div class="cancel_btn abs img pointer" @click="modalClose">
        <img src="@/assets/img/cancel_icon.png" alt="" />
      </div>
    </div>

    <!--게시글 삭제 완료 -->
    <div
      id="postDelcompModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">삭제완료</div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          인터뷰가 삭제되었습니다.
        </div>
        <button class="btn_black w100 inner260" @click="modalClose">확인</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--회원가입 완료 -->
    <div
      id="signCompModal"
      class="modal_box abs w_center inner350 w100 br10 bc0"
    >
      <div class="box_inner flex column alc h100">
        <div class="title fs20 fwt600">회원가입 완료</div>
        <div class="sent t_center fs16 fwt500 w100 abs w_center">
          지금 바로 다양한 인터뷰를<br />
          만나보세요!
        </div>
        <button class="btn_black w100 inner260">인터뷰 보러가기</button>
      </div>
      <!-- <div class="cancel_btn abs img pointer" @click="modalClose;">
            <img src="@/assets/img/cancel_icon.png" alt="">
        </div> -->
    </div>

    <!--회원가입 완료 -->
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive} from 'vue';
export default {
    setup() {
        onMounted(() => {
            emitter.$on('modalOpen', resiveCallback);
        });
        onUnmounted(() => {
            emitter.$off('modalOpen', resiveCallback);
        });
        const state = reactive({
            manager: {
                managerName: '',
                managerPhone: '',
                managerEmail: ''
            },
            view: '',
            param: ''
            

        });
        const resiveCallback = (view, param) => {
            console.log(view);
            console.log(param);
            state.view = view;
            state.param = param;
            if (view == 'viewApply') {
                state.manager = param;
            }
            modalOpen(view);
        };
        const modalClose = () => {
            if (state.view == 'postDelete') {
                emitter.$emit('_postDelete', state.param);
            }
            let modalWrap = document.querySelector('.modal_wrap');
            let modalBox = document.querySelector('.modal_box');
            modalWrap.style.display = 'none';
            modalBox.style.display = 'none';
        };
        const modalOpen = (c) => {
            let modalWrap = document.querySelector('.modal_wrap');
            let modalBox = document.querySelector('.modal_box');
            const viewApplyModal = document.querySelector('#viewApplyModal'); //상세페이지 지원&문의하기
            const changePswdModal = document.querySelector('#changePswdModal'); //비밀번호 변경
            const changePswdCompModal = document.querySelector('#changePswdCompModal'); //비밀번호 변경 완료
            const changePswdFailModal = document.querySelector('#changePswdFailModal'); //비밀번호 변경 실패
            const newPswdModal = document.querySelector('#newPswdModal'); //비밀번호 재설정 링크
            const postEnrollModal = document.querySelector('#postEnrollModal'); //인터뷰 등록
            const postUpdateModal = document.querySelector('#postUpdateModal'); //인터뷰 수정
            const postDeleteModal = document.querySelector('#postDeleteModal'); //인터뷰 삭제
            const postDelcompModal = document.querySelector('#postDelcompModal'); //인터뷰 삭제 완료
            const signCompModal = document.querySelector('#signCompModal'); //회원가입 완료

            modalWrap.style.display = 'none';
            modalBox.style.display = 'none';
    
            modalWrap.style.display = 'block';
    
            if (c === 'viewApply') { //뷰페이지 지원&문의하기
                viewApplyModal.style.display = 'block';
            }
    
            if (c === 'changePswd') { //비밀번호 변경
                changePswdModal.style.display = 'block';
            }
    
            if (c === 'changePswdComp') { //비밀번호 변경 완료
                changePswdCompModal.style.display = 'block';
            }
    
            if (c === 'changePswdFail') { //비밀번호 변경 실패
                changePswdFailModal.style.display = 'block';
            }
    
            if (c === 'newPswd') { //비밀번호 재설정 링크
                newPswdModal.style.display = 'block';
            }
    
            if (c === 'postEnroll') { //인터뷰 등록
                postEnrollModal.style.display = 'block';
            }
    
            if (c === 'postUpdate') { //인터뷰 수정
                postUpdateModal.style.display = 'block';
            }
    
            if (c === 'postDelete') { //인터뷰 삭제
                postDeleteModal.style.display = 'block';
            }
    
            if (c === 'postDelcomp') { //인터뷰 삭제 완료
                postDelcompModal.style.display = 'block';
            }
    
            if (c === 'signComp') { //회원가입 완료
                signCompModal.style.display = 'block';
            }
        };
        return {
            modalOpen,
            modalClose,
            state
        };
    }
};
</script>
