<template>
  <div id="main" class="pt52 bc_01">
    <div id="write" class="pt52 pb10">
      <div class="inner inner1104 m_center w100" v-if="state.store">
        <!--섹션1---------------------------------------->
        <div class="wrt_sec wrt_sec_3 flex"><!--타이틀 & 이미지-->
          <div class="title_area">

            <div class="title fs35 fwt600"><i class="bi bi-pin-map-fill mo_view"></i> 실시간 현재위치 </div>
          </div><!--담당자-->
          <ul class="lst_area">
            <li>
              <div class="tit fs17 fwt500">상호명</div>
              <input type="text" class="wrt_ipt readonly" readonly="readonly" v-if="state.store"
                v-model="state.store.storeNm">
            </li>
          </ul>
        </div>
        <!--섹션2---------------------------------------->
        <!-- <div class="wrt_sec wrt_sec_2 flex">
          <div class="title_area">
            <div class="title fs35 fwt600"><i class="bi bi-music-note mo_view"></i>  허용 노래장르 </div>
          </div>
          <ul class="cate_area inline-flex fxwrap w100">
            <li>
              <input type="checkbox" name="wrt_cate" id="wrt_cate_1 " value="mobileUsed"><label for="wrt_cate_1"
                class="flex alc h70">
                <div class="txt flex column h70">
                  <div class="tit fs16 fwt500">ROCK</div>
                </div>
              </label>
            </li>
          </ul>
        </div> -->
        <!--섹션3---------------------------------------->
        <div class="wrt_sec wrt_sec_3 flex"><!--타이틀-->
          <div class="title_area">
            <div class="title fs35 fwt600"><i class="bi bi-pencil-fill mo_view"></i> 신청곡 입력하기 </div>
          </div><!--담당자-->
          <ul class="lst_area">
            <li>
              <div class="tit fs17 fwt500">가수명</div><input type="text" class="wrt_ipt" v-model="state.req.reqSingerNm">
            </li>
            <li>
              <div class="tit fs17 fwt500">노래제목</div><input type="text" class="wrt_ipt" v-model="state.req.reqSongNm">
            </li>
            <li>
              <div class="tit fs17 fwt500">노래영상url</div><input type="text" class="wrt_ipt" v-model="state.req.musicUrl">
            </li>
            <li>
              <div class="prv_agree fs14" style="margin-top:12px;">
                <!-- <input type="checkbox" name="wrt_agree" id="wrt_agree" checked="" disabled="true"> -->
                <label for="wrt_agree" class="pointer"># 모든 노래는 익명으로 신청 됩니다.
                </label>

                <div>
                  <label for="wrt_agree" class="pointer color_red" v-if="state.errorMSg">{{ state.errorMSg }}
                  </label>
                </div>
              </div>
            </li>
          </ul>

        </div><!--섹션5---------------------------------------->
        <!-- :disabled-start-date=""
    :disabled-end-date=""
    :text-format=""
    :date-format=""
    :disabled=""
    :placeholder=""
    :circle=""
    :show-clear-button=""
    :show-picker-inital="" --><!--등록 버튼---------------------------------------->
        <div class="submit_btn t_center"><button class="btn_black" @click="insertMusic">등록하기</button></div>
      </div>
      <div v-else>
        <div class="not_playlist">
          <i class="bi bi-chat-dots"></i>존재하지 않는 스토어 입니다.<br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { _getStore, _insertMusic } from '@/api/ourplay.js';

export default {
  components: {},
  props: ['storeNo'],
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      store: {},
      req: {

      },
      errorMSg: ''
    });
    onMounted(() => {
      getStore();
      state.req.reqStoreNo = props.storeNo;
      console.log('storeNo:', props.storeNo);
    });
    const getStore = async () => {
      const response = await _getStore(props.storeNo);
      try {
        if (response.data.code === 200) {
          console.log(response.data.data);
          state.store = response.data.data;
        } else {
          console.log(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    };
    const insertMusic = async () => {
      if (!state.req.reqSingerNm) {
        // toast('d', 3000, 'success');
        state.errorMSg = '가수를 입력해주세요';
        return;
      }
      if (!state.req.reqSongNm) {
        state.errorMSg = '노래를 입력해주세요';
        return;
      }
      if (!state.req.musicUrl) {
        state.errorMSg = '유투브 링크를 입력해주세요';
        return;
      }
      state.errorMSg = '';
      const response = await _insertMusic(state.req);
      try {
        if (response.data.code === 200) {
          alert('신청곡이 등록 되었습니다');
          state.req.reqSingerNm = '';
          state.req.reqSongNm = '';
          state.req.musicUrl = '';
        } else {
          console.log(response.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    };
    const goWrite = () => {
      router.push({
        path: '/product/write'
      });
    };
    const goDetail = (v) => {
      router.push({
        path: '/product/view',
        params: { id: v }
      });
    };
    const goList = () => {
      router.push({
        path: '/product/list'
      });
    };

    return { state, goWrite, goDetail, goList, insertMusic };
  }
};
</script>

