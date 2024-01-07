<template>
  <div id="findPassword" class="pt52">
    <div class="inner inner354 m_center w100">
      <div class="content">
        <div class="title fs40 fwt600 t_center">비밀번호 찾기</div>

        <form
          name="find_pass_view"
          action=""
          >
          <!-- onSubmit="return form_pass_find();" -->
          <div class="find_form flex column">
            <div class="lst flex column">
              <label for="" class="fs20 fwt500 block">이메일(아이디)</label>
              <input
                type="text"
                id="mv_email"
                name="email"
                placeholder="이메일"
                v-model="state.regist.email"
              />
            </div>

            <div class="lst flex column">
              <label for="" class="fs20 fwt500 block">이름</label>
              <input
                type="text"
                id="mv_name"
                name="name"
                placeholder="이름을 입력해주세요"
                v-model="state.regist.userName"
              />
            </div>

            <div class="lst flex column last">
              <label for="" class="fs20 fwt500 block">핸드폰 번호</label>
              <input
                type="text"
                id="mv_phone"
                name="phone"
                placeholder="-제외 입력"
                v-model="state.regist.phoneNumber"
              />
            </div>

            <div class="hide_warning fc7 fs15 fwt500" ref="emptyWarning">
              <div class="pass1_warning warning_txt">
                모든 정보를 올바르게 입력해주세요.
              </div>
              <div class="pass2_warning warning_txt">
                해당하는 정보가 없습니다. 다시 한번 확인해주세요.
              </div>
            </div>

            <button type="button" class="submit_btn btn_black fs20 fwt600 br5" @click="formPassFind">
              비밀번호 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>
<script>
import { onMounted, watch, nextTick, reactive, ref, getCurrentInstance} from 'vue';
import { _getPassword } from '@/api/moviewApis.js';
export default {
    mounted() {
    },
    unmounted() {
        
    },
    setup(ref) {
        const instance = getCurrentInstance();
        const state = reactive({
            regist: {
                email: '',
                userName: '',
                phoneNumber: ''
            }
        });
        const formPassFind = async () => {
            if (state.regist.email.length == 0
            || state.regist.email.length == 0
            || state.regist.email.length == 0) {
                instance.refs.emptyWarning.style.display = 'block' ;
                instance.refs.emptyWarning.children[0].style.display = 'block';
                return;
            } else {
                instance.refs.emptyWarning.style.display = 'none' ;
                instance.refs.emptyWarning.children[0].style.display = 'none';
                await getPassword();
            }

            
        };
        // api 호출
        const getPassword = async () => {
            let params = {regist: state.regist};
            const response = await _getPassword(params);
            try {
                if (response.data.code === 200) {
                    console.log('저장 되었습니다');
                    // toast.success('저장 되었습니다');
                } else {
                    console.log(response.data.message);
                    // toast.error(response.data.message);
                }
            } catch (e) {
                console.log(e);
                // toast.error(e);
            }
        };
          
        return {
            state,
            ref,
            formPassFind,
            getPassword
        };
    }
};
    
</script>
