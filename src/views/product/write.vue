<template>
  <div id="write" class="pt52">
    <div class="inner inner1104 m_center w100">
      <!--섹션1---------------------------------------->
      <div class="wrt_sec wrt_sec_1 flex">
        <!--타이틀 & 이미지-->
        <div class="title_area">
          <div class="title fs35 fwt600">
            인터뷰 기본정보를<br />
            입력해주세요.
          </div>
          <div class="wrt_img">
            <div class="tit fwt500 fs15">이미지 등록 (최대 1장 필수)</div>
            <div class="wrt fs15 fc14">
              ! 회사 로고 등 대표성을 띄는 이미지를 넣어주세요.
            </div>
            <div id="drop" class="box g_center" :style="{'border': state.registItv.fileImage?'none':'1px solid #F86671'}">
              <div class="txt fs15 t_center">
                <div class="fc7 fwt500">
                  최소 권장사이즈<br class="mo_view" />
                  : 350x270px<br /><br class="mo_view" />
                  1MB 이하의 JPG,PNG
                </div>
                <div class="fc14 pc_view">드래그해서 넣을 수 있어요.</div>
              </div>
              <img id="preview" class="abs w_center w100 h100" v-if="state.registItv.fileImage" v-bind:src="state.registItv.fileImage"/>
            </div>
            <div class="attach_btn_area">
              <input type="file" class="attach_btn btn_black"
              accept="image/*" id="attachFile" ref="image"
              v-on:change="readURL($event)"
              />
              <!-- @change="readURL(this)" /> -->
              <label
                for="attachFile"
                class="attach_btn btn_black pointer inblock"
                >첨부하기</label
              >
            </div>
          </div>
        </div>

        <!-- 정보 -->
        <div class="cont_area w100">
          <!-- 인터뷰 제목 -->
          <div class="wrt_title wrt_box fc9">
            <div class="tit fs18 fwt500">인터뷰 제목</div>
            <input
              type="text"
              class="wrt_ipt w100 fs17"
              placeholder="모집하시는 인터뷰의 제목을 적어주세요."
              v-model="state.registItv.title"
            />
            <div class="prg fs15">
              ! 고객들이 어떤 인터뷰인지 알 수 있게 적어주세요.
            </div>
          </div>

          <!-- 모집기간 -->
          <div class="wrt_period wrt_box">
            <div class="tit fs18 fwt500">모집기간</div>
            <div class="cont flex rel w100 justy_btw datepicker">
              <Datepicker lang="en" :range="state.registItv.itvDate"
              date-format="{year: 'numeric',month: '2-digit',day: '2-digit'}"
              placeholder="MM-DD-YYYY" ref="datePicker"/>
              <!-- <input
                type="text"
                id="wrtPeriod"
                class="wrt_ipt fs17 w100"
                placeholder="YYYY-MM-DD"
                @click="getDate"
                v-model="state.registItv.invDate"
              /> -->
             <img
                src="@/assets/img/calendar_icon.png"
                alt=""
                class="abs y_center"
                @click="clickDatepicker()"
              />
            </div>
            <div class="hide_warning fc7 fs15 fwt500">
              시작일이 종료일보다 클 수 없습니다.
            </div>
          </div>

          <!-- 모집인원 & 인터뷰 일자 -->
          <div class="wrt_num_date wrt_box flex justy_btw">
            <div class="wrt_num wrt_person rel">
              <div class="tit fs18 fwt500">모집인원</div>

              <input
                type="text"
                id="wr_person"
                class="wrt_ipt w100 fs17"
                @click="clickWrPersonInp"
                placeholder="선택하세요"
                readonly ="readonly"
              />

              <div class="lst_bg fixed w100 h100"  v-if="state.wrPersonVisible"></div>

              <div class="lst abs br5 bc0 fs17"  v-if="state.wrPersonVisible">
                <div class="lst_tit mo_view fs15 fwt600">모집인원</div>
                <ul>
                  <li @click="getPerson(person)" v-for="(person, index) in state.person" :key="index">{{ person }}</li>
                </ul>
              </div>
            </div>

            <div class="wrt_num">
              <div class="tit fs18 fwt500">인터뷰 일자</div>
              <input
                type="text"
                id="wrtDate"
                class="wrt_ipt fs17 w100"
                placeholder="YYYY-MM-DD"
                v-model="state.registItv.itvDate"
              />
            </div>
          </div>

          <!-- 소요시간 -->
          <div class="wrt_time wrt_box">
            <div class="tit fs18 fwt500">소요 시간</div>
            <div class="cont flex alc">
              <input
                type="text"
                class="wrt_ipt fs17"
                oninput="this.value = this.value.replace(/[^0-9]/, '');"
                v-model="state.registItv.takeTimeDigit"
              />
              <div class="fs15 fwt500">
                <input type="radio" id="wrt_time_1" name="wrt_time" checked
                value="minite"
                v-model="state.registItv.takeTimeType"/>
                <label for="wrt_time_1">분</label>
              </div>
              <div class="fs15 fwt500">
                <input type="radio" id="wrt_time_2" name="wrt_time"
                value="hour" v-model="state.registItv.takeTimeType"/>
                <label for="wrt_time_2">시간</label>
              </div>
              <div class="fs15 fwt500">
                <input type="radio" id="wrt_time_3" name="wrt_time"
                value="day" v-model="state.registItv.takeTimeType"/>
                <label for="wrt_time_3">일</label>
              </div>
            </div>
          </div>

          <!-- 인터뷰 지역 & 인터뷰 사례비 -->
          <div class="wrt_num_region wrt_box flex justy_btw">
            <div class="wrt_num wrt_region rel">
              <div class="tit fs18 fwt500">인터뷰 지역</div>

              <input
                type="text"
                id="wr_area"
                class="wrt_ipt w100 fs17"
                placeholder="선택하세요"
                @click="clickWrAreaInp"
                readonly ="readonly"
              />
              <div class="lst_bg fixed w100 h100 wrAreaLstBg" v-if="state.wrAreaVisible"></div>

              <div class="lst abs br5 bc0 fs17 wrAreaLst" v-if="state.wrAreaVisible">
                <div class="lst_tit mo_view fs15 fwt600">인터뷰 지역</div>
                <ul class="lst_slide">
                  <li @click="getArea(location)" v-for="(location, index) in state.location" :key="index">{{ location }}</li>
                </ul>
              </div>
            </div>

            <div class="wrt_num wrt_price">
              <div class="tit fs18 fwt500">인터뷰 사례비</div>
              <div class="rel">
                <input
                  type="text"
                  dir="rtl"
                  class="wrt_ipt w100 fs17"
                  oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');"
                  v-model="state.registItv.pay"
                  />
                  <!-- oninput="inputNumberFormat(this)" -->
                <i class="abs won y_center fs17 fwt500">원</i>
              </div>
            </div>
          </div>

          <!-- 인터뷰 방식 -->
          <div class="wrt_option wrt_box">
            <div class="tit fs18 fwt500">인터뷰 방식</div>
            <div class="cont flex alc">
              <div class="fs18 fwt500">
                <input
                  type="radio"
                  id="wrt_option_1"
                  name="wrt_option"
                  v-model="state.registItv.itvMethod"
                  checked
                />
                <label for="wrt_option_1">대면</label>
              </div>
              <div class="fs18 fwt500">
                <input type="radio" id="wrt_option_2" name="wrt_option" value="landline" v-model="state.registItv.itvMethod"/>
                <label for="wrt_option_2">유선</label>
              </div>
              <div class="fs18 fwt500">
                <input type="radio" id="wrt_option_3" name="wrt_option" value="video" v-model="state.registItv.itvMethod"/>
                <label for="wrt_option_3">화상</label>
              </div>
              <div class="fs18 fwt500">
                <input type="radio" id="wrt_option_4" name="wrt_option" value="research" v-model="state.registItv.itvMethod"/>
                <label for="wrt_option_4">설문</label>
              </div>
              <div class="fs18 fwt500">
                <input type="radio" id="wrt_option_5" name="wrt_option" value="etc" v-model="state.registItv.itvMethod"/>
                <label for="wrt_option_5">기타</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--섹션2---------------------------------------->
      <div class="wrt_sec wrt_sec_2 flex">
        <!--타이틀-->
        <div class="title_area">
          <div class="title fs35 fwt600">
            인터뷰 종류를<br />
            골라주세요.
          </div>
        </div>

        <!--카테고리-->
        <ul class="cate_area flex fxwrap w100">
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_1" checked value="mobileUsed" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_1" class="flex alc h100" >
              <img
                src="@/assets/img/cate_icon_1.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">
                  모바일 사용성<br class="mo_view" />
                  테스트<i>(UT)</i>
                </div>
                <div class="subt fs12 pc_view">(Usability Test, UT)</div>
                <div class="txt fs12 fwt500">
                  앱이나 웹에서 제품을 사용하는<br />
                  모습을 관찰하고 테스트 해볼거에요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_2" value="productUsed" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_2" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_2.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">
                  제품 사용성<br class="mo_view" />
                  테스트
                </div>
                <div class="txt fs12 fwt500">
                  제품을 사용하시고 설문 인터뷰를<br />
                  통해 고객 의견을 들어보고 싶어요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_3" value="Q&A" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_3" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_3.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">
                  단순질의<br class="mo_view" />
                  인터뷰
                </div>
                <div class="txt fs12 fwt500">
                  궁금했던 사항들을 고객에게<br />
                  편견없이 물어보고 싶어요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_4" value="research" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_4" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_4.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">
                  설문조사<br class="mo_view" />
                  인터뷰
                </div>
                <div class="txt fs12 fwt500">
                  설문조사를 통해 정량적인 결과를<br />
                  얻으려고 해요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_5" value="clinical" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_5" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_5.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">임상실험</div>
                <div class="txt fs12 fwt500">
                  병원 제약회사 등에서 임상실험<br />
                  지원자를 모집하려고 해요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_6" value="brodcast" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_6" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_6.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">
                  방송 인터뷰이<br class="mo_view" />
                  모집
                </div>
                <div class="subt fs12 pc_view">
                  (예능, 다큐, 유튜브 출연 등)
                </div>
                <div class="txt fs12 fwt500">
                  방송 촬영이 들어가는 인터뷰<br />
                  지원자를 모집하고 있어요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_7" value="reviewer" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_7" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_7.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">
                  리뷰어, 체험단<br class="mo_view" />
                  모집
                </div>
                <div class="txt fs12 fwt500">
                  제품 리뷰를 남겨주실 분들을<br />
                  구하고 있어요.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" name="wrt_cate" id="wrt_cate_8" value="etc" v-model="state.registItv.itvType"/>
            <label for="wrt_cate_8" class="flex alc h100">
              <img
                src="@/assets/img/cate_icon_8.svg"
                class="ico abs y_center"
                alt=""
              />
              <div class="txt flex column h100">
                <div class="tit fs16 fwt500">기타 주제</div>
                <div class="txt fs12 fwt500">
                  보기에 포함되는 인터뷰가 없으시면<br />
                  기타를 선택해주세요.
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>

      <!--섹션3---------------------------------------->
      <div class="wrt_sec wrt_sec_3 flex">
        <!--타이틀-->
        <div class="title_area">
          <div class="title fs35 fwt600">
            인터뷰<br class="pc_view" />
            상세 내용을<br />
            입력해주세요.
          </div>
        </div>

        <!-- 상세내용 -->
        <div class="detail_area w100">
          <textarea
            name="name"
            rows="8"
            cols="80"
            class="w100"
            v-model="state.registItv.detail"
            placeholder="인터뷰에 대한 상세한 설명을 해주세요. 인터뷰이의 지원하기 전 알아야할 정보들을 적어주시면 좋아요."
          ></textarea>
        </div>
      </div>

      <!--섹션4---------------------------------------->
      <div class="wrt_sec wrt_sec_4 flex">
        <!--타이틀-->
        <div class="title_area">
          <div class="title fs35 fwt600">
            모집하는<br class="pc_view" />
            담당자 정보를<br />
            입력해주세요.
          </div>
        </div>

        <!--담당자-->
        <ul class="lst_area">
          <li>
            <div class="tit fs17 fwt500">담당자명</div>
            <input type="text" class="wrt_ipt" v-model="state.registItv.mngrName"/>
          </li>
          <li>
            <div class="tit fs17 fwt500">전화번호</div>
            <input
              type="text"
              class="wrt_ipt"
              v-model="state.registItv.mngrPhnNum"
              oninput="this.value = this.value.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);"
              maxlength="13"
            />
          </li>
          <li>
            <div class="tit fs17 fwt500">이메일</div>
            <input type="text" class="wrt_ipt" v-model="state.registItv.mngrMail">
          </li>
        </ul>
      </div>

      <!--섹션5---------------------------------------->
      <div class="wrt_sec wrt_sec_5 flex">
        <!--타이틀-->
        <div class="title_area">
          <div class="title fs35 fwt600">
            개인정보<br class="pc_view" />
            수집 및 이용동의
          </div>
        </div>

        <!--개인정보-->
        <div class="privacy_area w100">
          <div class="prv_box fs15 br5">
            (주)000은 000서비스 제공을 위하여 다음과 같이 정보를 수집 및
            이용합니다.<br /><br class="pc_view" />
            1. 수집항목<br />
            2. 수집 및 이용목적<br />
            3. 보유 및 이용기간<br /><br class="pc_view" />
            고객님께서는 개인정보 수집 및 이용 동의에 거부하실 수 있습니다. 다만
            거부하시는 경우 서비스 이용이 불가합니다.
          </div>
          <div class="prg fc7 fs15 fwt500">
            개인정보 수집 및 이용에 동의 해주셔야 서비스 이용이 가능합니다.
          </div>
          <div class="prv_agree fs18">
            <input type="checkbox" name="wrt_agree" id="wrt_agree" checked />
            <label for="wrt_agree" class="pointer"
              >[필수] 개인정보 수집 및 이용에 동의합니다.</label
            >
          </div>
        </div>
      </div>
     


    <!-- :disabled-start-date=""
    :disabled-end-date=""
    :text-format=""
    :date-format=""
    :disabled=""
    :placeholder=""
    :circle=""
    :show-clear-button=""
    :show-picker-inital="" -->
      <!--등록 버튼---------------------------------------->
      <div class="submit_btn t_center">
        <button class="btn_black" @click="regstInterView">등록하기</button>
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted, watch, nextTick, reactive, getCurrentInstance} from 'vue';
import { callcommon } from '@/utils/commonFn.js';
import { _registInterView } from '@/api/moviewApis.js';
import VueDatepickerUi from 'vue-datepicker-ui';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';


// import { Toast  } from 'vue-toastification';
export default {
    components: {  Datepicker: VueDatepickerUi},
    props: {
        value: String
    },
    mounted() {
        document.addEventListener('click', this.handleGlobalClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleGlobalClick);
    },
    methods: {
        handleGlobalClick(event) {
            if (event.target.tagName != 'LI'
             && event.target.id != 'wr_person'
             && event.target.id != 'wr_area') {
                this.state.wrAreaVisible = false;
                this.state.wrPersonVisible = false;
            }
        }
    },
    setup() {
        // const toast = Toast();
        const instance = getCurrentInstance();
        callcommon();
        const state = reactive({
            input: {
                files: {
              
                }
            },
            registItv: {
                title: '',
                invDate: '',
                location: '',
                person: '',
                itvDate: [
                    new Date(),
                    new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)],
                takeTimeDigit: '',
                takeTimeType: 'minite',
                detail: '',
                mngrName: '',
                mngrPhnNum: '',
                mngrMail: '',
                pay: '',
                itvMethod: '',
                itvType: '',
                fileImage: ''
            },
            location: [
                '서울', '경기', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '강원', '충남', '충북', '전북', '전남', '경남', '경북', '제주'
            ],
            person: [
                '1명', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명', '10명 이상'
            ],
            wrAreaVisible: false,
            wrPersonVisible: false
            
        });

        const clickDatepicker = () => {
            console.log(instance.refs.datePicker.$el);
            instance.refs.datePicker.$el.click();
            // instance.refs.datePicker.$event.click;
        };
        //지역 선택 클릭
        const clickWrAreaInp = () => {
            state.wrAreaVisible = true;
            let ww = window.innerWidth;
            if (ww < 821) {
                document.querySelector('.wrAreaLstBg').show();
            }
        };
        //지역 클릭
        const getArea = (v) => {
            document.querySelector('#wr_area').value = v;
            state.wrAreaVisible = false;
            state.registItv.location = v;
        };
        //인원 선택 클릭
        const clickWrPersonInp = () => {
            state.wrPersonVisible = true;
            let ww = window.innerWidth;
            if (ww < 821) {
                document.querySelector('.wrAreaLstBg').show();
            }
        };
        //인원수 클릭
        const getPerson = (v) => {
            document.querySelector('#wr_person').value = v;
            state.wrPersonVisible = false;
            state.registItv.person = v;
        };
        const getDate = () => {
            console.log('!');
            callcommon();
        };
        /**글쓰기 첨부 이미지 미리보기**/
        const readURL = (event) => {
            console.log(event);
            state.registItv.fileImage =  window.URL.createObjectURL(event.target.files[0]);
        };
        //등록 
        const regstInterView = async () => {
            let params = {registItv: state.registItv};
            const response = await _registInterView(params);
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
        return {state,
            clickWrAreaInp,
            getArea,
            clickWrPersonInp,
            getPerson,
            getDate,
            regstInterView,
            readURL,
            clickDatepicker
        };
    }
};
</script>

<style>
.lst {
  display: block;
}

.lst_bg {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.lst_bg.is-visible {
  display: block;
}

.is-open {
  display: block;
}
.v-calendar .input-field input, .v-calendar .calendar .selected-field .viewButton, .v-calendar .calendar .days .day .number, .v-calendar .calendar .days .day.name{
  font-size: small;
  
}.v-calendar .input-field input{
  width:100%;
height: 4rem;
    box-shadow: none;
    border: 1px solid #363A3C;
    border-radius: 5px;
    padding: 0.8rem 2rem;
    box-sizing: border-box;
    color:#000;
}.v-calendar .input-field.long{
width:100%;
}.v-calendar.left.long{
  width:100%;
}svg.datepicker{
  display: none;
}
</style>