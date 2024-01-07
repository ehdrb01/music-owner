<template>
<div id="sign" class="pt52">
    <div class="inner inner520 w100 m_center">

        <div class="title t_center fs40 fwt600">회원가입</div>

        <div class="content">
                <!--이메일-->
                <div class="sign_lst">
                    <div class="sign_tit fs22 fwt500">이메일</div>
                    <div class="sign_ip">
                        <input type="text" v-model="state.userInfo.email" name="email" id="mv_email" placeholder="이메일 주소 입력">
                    </div>
                    <div class="sign_ip email_ip flex">
                        <input type="text" v-model="state.userInfo.emailRe" name="" id="mv_email2" placeholder="이메일 주소 재입력">
                        <label for="check_email" class="btn_black fs20 fwt600 g_center pointer">
                            <input type="checkbox" id="check_email" @click="getCheckEmail();">
                            확인
                        </label>
                    </div>
                    <div class="hide_warning fc7 fs15 fwt500">

                        <div class="email_warning warning_txt" v-if="state.warn.emptyMail">이메일을 입력해주세요.</div>
                        <div class="email_warning warning_txt" v-if="state.warn.checkMatchMail">이메일 일치여부를 체크해주세요.</div>
                        <div class="email_warning warning_txt" v-if="state.warn.notMatchMail">입력하신 이메일 주소가 일치하지 않습니다.</div>
                        <div class="email_warning warning_txt" v-if="state.warn.alreadyMail">이미 가입된 이메일 주소입니다.</div>
                    </div>
                </div>

                <!--비밀번호-->
                <div class="sign_lst">
                    <div class="sign_tit fs22 fwt500" >비밀번호</div>
                    <div class="sign_ip">
                        <input type="password" v-model="state.userInfo.password" name="password" id="mv_password" placeholder="8자 이상, 영문/숫자/특수문자 포함">
                    </div>
                    <div class="sign_ip">
                        <input type="password" v-model="state.userInfo.passwordRe" name="password2" id="mv_password2" placeholder="비밀번호 재입력">
                    </div>
                    <div class="hide_warning fc7 fs15 fwt500" v-if="state.hideWarr">
                        <div class="password_warning warning_txt" v-if="state.warn.emptyPass">비밀번호를 입력하여 주세요.</div>
                        <div class="password_warning warning_txt" v-if="state.warn.passRule">비밀번호를 올바르게 입력하여 주세요.</div>
                        <div class="password_warning warning_txt" v-if="state.warn.notMatchPass">비밀번호가 일치하지 않습니다.</div>
                    </div>
                </div>

                <!--이름-->
                <div class="sign_lst">
                    <div class="sign_tit fs22 fwt500">이름</div>
                    <div class="sign_ip">
                        <input type="text" v-model="state.userInfo.userName" name="name" id="mv_name" placeholder="이름 입력">
                    </div>
                    <div class="hide_warning fc7 fs15 fwt500" v-if="state.hideWarr">
                        <div class="name_warning warning_txt" v-if="state.warn.emptyUserName">이름을 입력하여 주세요.</div>
                    </div>
                </div>

                <!--성별-->
                <div class="sign_lst">
                    <div class="sign_tit fs22 fwt500">성별</div>
                    <div class="sign_ip gender_ip flex br5">
                        <div class="gender_ip_lst">
                            <input type="radio" v-model="state.userInfo.gender" value="man" name="gender" id="mv_gender_m">
                            <label for="mv_gender_m" class="fs20 br5 block fwt600 pointer">남성</label>
                        </div>
                        <div class="gender_ip_lst">
                            <input type="radio" v-model="state.userInfo.gender"  value="woman" name="gender" id="mv_gender_f">
                            <label for="mv_gender_f" class="fs20 br5 block fwt600 pointer">여성</label>
                        </div>
                    </div>
                    <div class="hide_warning fc7 fs15 fwt500" v-if="state.hideWarr">
                        <div class="gender_warning warning_txt" v-if="state.warn.emptyGender">성별을 선택하여 주세요.</div>
                    </div>
                </div>

                <!--핸드폰번호-->
                <div class="sign_lst">
                    <div class="sign_tit fs22 fwt500">핸드폰 번호</div>
                    <div class="sign_ip">
                        <input type="text" v-model="state.userInfo.phoneNumber" name="phone" id="mv_phone" placeholder="-제외 입력" class="phoneNumber" oninput="this.value = this.value.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);"
              maxlength="13">
                    </div>
                    <div class="hide_warning fc7 fs15 fwt500"  v-if="state.hideWarr">
                        <div class="phone_warning warning_txt" v-if="state.warn.emptyPhoneNumber">핸드폰 번호를 입력하여 주세요.</div>
                        <div class="phone_warning warning_txt" v-if="state.warn.PhoneNumberRule">핸드폰 번호를 정확히 입력하여 주세요.</div>
                    </div>
                </div>

                <!--submit btn-->
                <button class="submit_btn fs20 fwt600 btn_black w100 br5" @click="getJoin()">가입하기1</button>

            <!-- </form> -->
        </div>

    </div>
</div>
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
            hideWarr: false,
            userInfo: {
                email: '',
                emailRe: '',
                password: '',
                passwordRe: '',
                userName: '',
                gender: '',
                phoneNumber: ''
            },
            warn: {
                emptyMail: false,
                checkEmail: false,
                notMatchMail: false,
                alreadyMail: false,

                emptyPass: false,
                passRule: false,
                notMatchPass: false,

                emptyUserName: false,

                emptyGender: false,

                emptyPhoneNumber: false,
                PhoneNumberRule: false
            }
            
        });
        const getJoin = () => {
            console.log('GetJoin');
            state.hideWarr = false;
            let mailCheck = getCheckEmail();
            let passCheck = getCheckPass();
            let nameCheck = getCheckName();
            let genderCheck = getCheckGender();
            let phoneCheck = getCheckPhone();
            if (state.warn.checkMatchMail) {
                state.hideWarr = true;
            }
            if (mailCheck && passCheck && nameCheck && genderCheck && phoneCheck) {
                state.hideWarr = false;
                //가입 API call
            } else {
                state.hideWarr = true;
            }
        };
        //패스워드 체크
        const getCheckPass = () => {
            let res  = true;
            if (state.userInfo.password.length == 0) {
                res = true;
                state.warn.emptyPass = true;
            } else {
                state.warn.emptyPass = false;
            }
            const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,20}$/;
            let regexRes = regex.test(state.userInfo.password);
            if (!regexRes) {
                res = true;
                state.warn.passRule = true;
            } else {
                state.warn.passRule = false;
            }
            if (state.userInfo.password != state.userInfo.passwordRe) {
                res = true;
                state.warn.notMatchPass = true;
            } else {
                state.warn.notMatchPass = false;
            }
            console.log('state.userInfo.password.length ');
            console.log(state.userInfo.password.length);
            res = state.hideWarr;
            return res;
        };
        //이름 체크
        const getCheckName = () => {
            let res  = true;
            if (state.userInfo.userName.length == 0) {
                console.log('namelength invail');
                res = true;
                state.warn.emptyUserName = true;
            } else {
                state.warn.emptyUserName = false;
            }
            console.log('state.userInfo.userName.length');
            console.log(state.warn.emptyUserName);
            res = state.hideWarr;
            return res;
        };
        //성별 체크
        const getCheckGender = () => {
            let res  = true;
            if (state.userInfo.gender.length == 0) {
                res = true;
                state.warn.emptyGender = true;
            } else {
                state.warn.emptyGender = false;
            }

            res = state.hideWarr;
            return res;
        };
        //전화번호 체크
        const getCheckPhone = () => {
            let res  = true;
            if (state.userInfo.phoneNumber.length == 0) {
                res = true;
                state.warn.emptyPhoneNumber = true;
            } else {
                state.warn.emptyPhoneNumber = false;
            }
            res = state.hideWarr;
            return res;
        };
        // 이메일 재입력 체크
        const getCheckEmail = () => {
            let res = true;
            
            if (state.userInfo.email.length == 0) {
                res = true;
                state.warn.emptyMail = true;
            } else {
                state.warn.emptyMail = false;
            }

            if (state.userInfo.email != state.userInfo.emailRe) {
                res = true;
                state.warn.notMatchMail = true;
                
            } else {
                state.warn.notMatchMail = false;
                alert('확인되었습니다');
                
            }
            //이메일 가입 여부 확인 API call
            res = state.hideWarr;
            return res;
            
        };

        return {state, getJoin, getCheckEmail};
    }
};

</script>
