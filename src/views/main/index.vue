<template>
  <div id="main" class="pt52">
    <!-- 메인 비쥬얼 -->
    <div class="visual">
      <div class="inner w100 m_center rel">
        <div class="cont flex alstart justy_btw">
          <div class="txt_area">
            <div class="title fs45 fwt700 fc6">
              일잘러는<br />
              모두의 인터뷰에서<br />
              답을 찾습니다.
            </div>
            <div class="wrt fs15 fwt500">
              고객 인터뷰를 통해<br class="mo_view" />
              고객들의 진짜 의견을 들어보세요.
            </div>
            <button class="enroll fc0 fwt500" @click="goWrite()">
              <a class="inblock btn_black br25">
                인터뷰 등록하기
              </a>
            </button>
            <div class="link pc_view" @click="goList()">
              <a class="fs15 fwt500">
                모집중인 인터뷰도 확인해보세요 >
              </a>
            </div>
          </div>

          <div class="img_area img pc_view">
            <img src="@/assets/img/main_img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 메인 컨텐츠 -->
    <div class="content bc2">
      <div class="inner inner1104 w100 m_center">
        <div class="title flex alc fs25 fwt600">📋 지금 모집중이에요.</div>

        <!-- 공통 리스트 디자인 -->
        <div id="comp_lst_area">
          <ul class="comp_lst flex fxwrap">
            <li class="lst">
              <a @click="goDetail(2)">
                <div class="img">
                  <img src="@/assets/img/sample_img_1.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_2.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_3.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_4.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_5.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_6.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_7.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>

            <li class="lst">
              <a href="">
                <div class="img">
                  <img src="@/assets/img/sample_img_8.png" alt="" />
                </div>
                <div class="cont flex justy_btw">
                  <div class="txt">
                    <div class="tit fc6 fs15 fwt600">
                      의류 재활용 관련 공모전 인터뷰이 모집합니다.
                    </div>
                    <ul class="loca fc5 fs13 flex fwt500">
                      <li>대면</li>
                      <li>서울</li>
                    </ul>
                    <div class="price fs13 fwt600 fc6">사례비 30,000원</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <!-- 더보기 - 리스트 이동  -->
        <div class="more_btn_wrap flex alc">
          <div class="more_btn inblock fs18 fwt500 fc0 bc4 m_center">
            <a @click="goList" class="block">더 많은 인터뷰 확인하기</a
            >
          </div>
        </div>
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
          
        });
        const goWrite = () => {
            router.push({
                path: '/product/write'
            });
        };
        const goDetail = (v) => {
            router.push({
                path: '/product/view',
                params: {id: v}
            });
        };
        const goList = () => {
            router.push({
                path: '/product/list'
            });
        };

        return {state, goWrite, goDetail, goList};
    }
};
</script>

