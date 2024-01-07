<template>
  <div id="list" class="pt52">
    <!-- 리스트 카테고리 -->
    <div class="cate">
      <div class="inner t_center">
        <div class="title fs35 fwt600">📋 지금 모집중이에요.</div>
        <div class="cate_wrap flex w100 m_center inner917">
          <div class="cate_all fs20 fwt600 pc_view on">
            <a href="" class="g_center h100">전체보기</a>
          </div>
          <ul class="cate_lst flex fxwrap fs15 fwt600">
            <li class="mo_view cate_all">
              <span class="pointer">전체보기</span>
            </li>
            <li>
              <span class="pointer"
                >유저 사용성<br class="mo_view" />
                테스트</span
              >
            </li>
            <li>
              <span class="pointer"
                >제품 사용성<br class="mo_view" />
                테스트</span
              >
            </li>
            <li><span class="pointer">단순질의</span></li>
            <li><span class="pointer">설문조사</span></li>
            <li>
              <span class="pointer"
                >방송 인터뷰이<br class="mo_view" />
                모집</span
              >
            </li>
            <li>
              <span class="pointer"
                >리뷰어, 체험단<br class="mo_view" />
                모집</span
              >
            </li>
            <li><span class="pointer">기타 주제</span></li>
            <li><span class="pointer">임상실험</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 리스트 컨텐츠 -->
    <div class="content bc2">
      <div class="inner inner1104 w100 m_center">
        <!-- 공통 리스트 디자인 -->
        <div id="comp_lst_area">
          <ul class="comp_lst flex fxwrap">
            <li class="lst">
              <a @click="goDetail(1)">
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
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import { _getProductList } from '@/api/moviewApis.js';
export default {
    components: {},
    setup() {
        const router = useRouter();
        const state = reactive({

        });
        onMounted(() => {
            getProductList();
        });
// 상세화면 이동
        const goDetail = (v) => {
            console.log('godetaili/' + v);
            router.push({
                path: '/product/view',
                props: true,
                query: {
                    id: v
                }
            });
        };
        //리스트 조회
        const getProductList = async () => {
            let params = {};
            const response = await _getProductList(params);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('조회 되었습니다');
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        return {
            state,
            goDetail,
            getProductList
        };
    }
};
</script>
<style scoped>

</style>
