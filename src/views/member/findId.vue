<template>
  
  <div id="findId" class="pt52">
    <div class="inner inner354 w100 m_center">
      <div class="content">
        <div class="title fs35 fwt600 t_center">이메일 찾기</div>
          <div class="find_form flex column">
            <div class="lst flex column">
              <label for="" class="fs18 fwt500 block">이름</label>
              <input
                type="text"
                id="mv_name"
                name="name"
                v-model="state.regist.userName"
                placeholder="이름을 입력해주세요"
                />
              </div>
              
              <div class="lst flex column">
              <label for="" class="fs18 fwt500 block">핸드폰 번호</label>
              <input
              type="number"
              id="mv_phone"
              name="phone"
              v-model="state.regist.userPhoneNum"
              placeholder="- 빼고 입력해 주세요."
              />
            </div>
            
            <div class="hide_warning fc7 fs15 fwt500">
              <div class="name_warning warning_txt"  ref="EmptyName">이름을 입력해주세요.</div>
              <div class="phone_warning warning_txt" ref="EmptyPhoneNum">
                핸드폰 번호를 입력해주세요
              </div>
            </div>
            
            <button @click="getEmailId" class="submit_btn btn_black fs18 fwt600 br5">
              이메일 아이디 찾기
            </button>
          </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
  
  
<script>
import { onMounted, watch, nextTick, reactive, ref, getCurrentInstance} from 'vue';
import { _getEmailId } from '@/api/moviewApis.js';
export default {
    mounted() {
    },
    unmounted() {
        
    },
    setup(ref) {
        const instance = getCurrentInstance();
        const state = reactive({
            regist: {
                userName: '',
                userPhoneNum: ''
            }
        });
        const getEmailId = async () => {
            console.log(instance.refs.EmptyName.style);
            if (state.regist.userName.length > 0) {
                instance.refs.EmptyName.style.display = 'none';
            } else {
                instance.refs.EmptyName.style.display = 'block';
            }
            if (state.regist.userPhoneNum.toString.length > 0) {
                instance.refs.EmptyPhoneNum.style.display = 'none';
            } else {
                instance.refs.EmptyPhoneNum.style.display = 'block';
            }
            if (state.regist.userName.length > 0 && state.regist.userPhoneNum.toString.length > 0) {
                //등록 
                let params = {regist: state.regist};
                const response = await _getEmailId(params);
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
            }
          
        };
        return {
            state,
            ref,
            getEmailId
          
        };
    }
};
</script>
