<template>
    <div class="example">
        <div class="gap">
            <h2>메뉴 신규 생성</h2>
            <div class="dec"><strong>@/data/memu.js</strong> 파일에서 추가 3depth구성</div>
            <MenuSample />
        </div>

        <div class="gap">
            <h2>페이지 생성</h2>
            <div class="dec"><strong>@/router/modules/1depth메뉴명.js</strong> 라우터 작성후 views폴더에서 템플릿 작성</div>
            <div class="dec">템플릿 작성 시 페이지 내용만 작성 </div>
            <div class="dec"> (<router-link to="/memberinfo">작성된 레이아웃 보기</router-link>)</div>
            <RouterSample />
        </div>
        <div class="gap">
            <h2>이벤트버스 사용</h2>
            <div class="dec">emitter 사용</div>
            <div class="dec">글로벌로 등록(main.js참고)</div>
            
            <EventBusSample  />
        </div>
        <div class="gap">
            <h2>API</h2>
            <ApiSample  />
        </div>
        <div class="gap">
            <h2>모먼트</h2>
            <div class="dec">글로벌로 등록(main.js참고)</div>
            <div class="dec">페이지내 사용시 <strong>return에 moment 추가 필수</strong> </div>
            <MomentSample />
        </div>
        <div class="gap">
            <h2>lodash</h2>
            <div class="dec">글로벌로 등록</div>
            <div class="dec">페이지내 사용시 <strong>return에 lodash 추가 필수</strong> </div>
            <LodashSample  />
        </div>
        
        <div class="gap">
            <h2>토스트 팝업</h2>
            <div class="dec">vue-toasted 사용</div>
            <div class="dec">글로벌로 등록(main.js참고)</div>
            <ToastedSample  />
        </div>
        <div class="gap">
            <h2>모달 팝업</h2>
            <div class="dec">Teleport기반 모달 사용</div>
            <div class="dec">index.html &lt;div id="modals"&gt; &lt;/div&gt; 모달영역</div>
            <div class="dec">글로벌로 등록(main.js참고)</div>
            <ModalSample  />
        </div>
        <div class="gap">
            <h2>Chart</h2>
            <div class="dec">chartvue 사용</div>
            <ChartSample  />
        </div>

    </div>
</template>
<script>

import { reactive} from 'vue';
import MenuSample from './components/MenuSample.vue';
import RouterSample from './components/RouterSample.vue';
import MomentSample from './components/MomentSample.vue';
import LodashSample from './components/LodashSample.vue';
import ApiSample from './components/ApiSample.vue';
import ToastedSample from './components/ToastedSample.vue';
import ModalSample from './components/ModalSample.vue';
import ChartSample from './components/ChartSample.vue';
import EventBusSample from './components/EventBusSample.vue';
export default {
    components: { MenuSample, RouterSample, MomentSample, LodashSample, ApiSample, ToastedSample, ModalSample, ChartSample, EventBusSample },
    setup() {
        
        const state = reactive({
          
        });
        return {
            state
        };
    }
};
</script>

<style>
.example .gap { overflow: hidden; max-width: 1200px; margin: 45px auto 30px;}
.example .gap > h2 { margin: 0 0 15px; font-size: 18px; font-weight: bold; }
.example .gap .sample { margin: 15px 0 25px; }
.example .guides .sample { margin: 0x 0 15px; background: #282c34;border-radius:6px; padding:10px 20px 0 }
.example .guides .sample pre code { color:#d19a66; font-family: Consolas,monospace !important; }
.example .dec{color:#6bacce}
.example .dec strong{font-weight:700;}
.example .container { overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative; width: 100%; height: 600px; box-sizing: border-box;}
.example .container .sLeft { width: 0; }
.example .container .sRight { width: 100%; height: 100%; }
.list-move { transition: transform 0.5s; }

</style>