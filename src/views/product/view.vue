<template>

<div id="view" class="pt52">
    <!-- 상단 -->
    <div class="content">
        <div class="inner inner914 m_center w100">
            <div class="cont_top flex alstart rel">

                <!-- 좌측 제목 & 이미지 -->
                <div class="title flex column rel">
                    <div class="tit fs35 fwt600">
                        식료품 플랫폼<br>
                        인터뷰이를<br class="pc_view">
                        모집합니다.
                    </div>
                    <div class="img br5">
                        <img src="@/assets/img/sample_img_3.png" alt="">
                    </div>
                </div>

                <!-- 우측 상세정보 -->
                <div class="info">

                    <!-- 정보 -->
                    <ul class="info_list">
                        <li class="list flex alc fs18">
                            <span class="list_tit">모집기간</span>
                            <em class="list_value">23.05.24 ~ 23.06.18</em>
                        </li>
                        <li class="list flex alc fs18">
                            <span class="list_tit">모집인원</span>
                            <em class="list_value">3명</em>
                        </li>
                        <li class="list flex alc fs18">
                            <span class="list_tit">인터뷰 일자</span>
                            <em class="list_value">23.05.03(월)</em>
                        </li>
                        <li class="list flex alc fs18">
                            <span class="list_tit">인터뷰 시간</span>
                            <em class="list_value">1시간</em>
                        </li>
                        <li class="list flex alc fs18">
                            <span class="list_tit">인터뷰 방식</span>
                            <em class="list_value">대면</em>
                        </li>
                        <li class="list flex alc fs18">
                            <span class="list_tit">인터뷰 사례비</span>
                            <em class="list_value">30,000원</em>
                        </li>
                    </ul>
                    <!-- 공유하기 -->
                    <div class="share_btn fs15">
                        <span class="pointer" @click="getClip()"><em class="fs20">📤</em>지인에게 알려주기</span>
                    </div>
                    <!-- 지원&문의 버튼 -->
                    <div class="button_area flex alc">
                        <button class="apply_btn btn_black" @click="getModal('viewApply');">지원하기</button>
                        <button class="inquiry_btn btn_border" @click="getModal('viewApply');">문의하기</button>
                    </div>
                </div>
                <!-- 우측 상세정보 -->
                <div class="hit fs15 fc15 abs pc_view">
                    조회수 &nbsp; 250
                </div>

            </div>
        </div>
    </div>

    <!-- 하단 -->
    <div class="content bc2">
        <div class="inner inner914 m_center w100">
            <div class="cont_bot">

                <!-- 상세내용 -->
                <div class="detail_area">
                    <div class="title fs20 fwt500">상세내용</div>
                    <div class="detail_box fs17 bc0 br5 fc10" id="managerInfo">
                        안녕하세요!!현재 제가 스포츠인들을 위한 서비스를 준비중에 있는데요!<br>
                        관련하여 간단한 사용자 인터뷰 진행하고 싶어, 온/오프라인으로 참여 가능하실 스포츠인을 찾고 있습니다!<br>
                        3040 남성분들 중 골프,테니스,배드민턴,탁구 등 라켓이나 장비 활용하는 스포츠로 한달에 최소 2개 종목 이상 스포츠 활동이 참여하시는 분이면 가장 좋고 그렇지 않더라도 스포츠 활동에 열정적이신분 (최소 주 1회 이상) 이면 누구든 괜찮습니다!<br>
                        (특히 골프,테니스,배드민턴,스쿼시,탁구 등을 하시는 분이면 더욱 좋습니다!!)비용을 드리지는 못하지만 오프라인으로 뵙게되면 맛있는 커피한잔+스벅쿠폰 / 온라인 인터뷰시 스벅쿠폰 별도 제공 가능합니다.<br>
                        관심 있으신 분은 댓글 남겨 주시면 채팅 드릴게요:)
                    </div>
                </div>

                <!-- 담당자 정보 -->
                <div class="manager_area">
                    <div class="title fs20 fwt500">담당자 정보</div>
                    <ul class="manager_list fs16 fc9">
                        <li class="list flex alc">
                            <span class="mng_tit">담당자명</span>
                            <em class="mng_value">홍길동</em>
                        </li>
                        <li class="list flex alc">
                            <span class="mng_tit">전화번호</span>
                            <em class="mng_value">010-2023-2829</em>
                        </li>
                        <li class="list flex alc">
                            <span class="mng_tit">이메일</span>
                            <em class="mng_value">
                                Customerinterview<br class="mo_view">@naver.com
                            </em>
                        </li>
                    </ul>
                </div>

                <!-- Q&A -->
                <div class="qa_area">

                    <div class="title fs20 fwt500">Q&A</div>

                    <textarea class="qa_box br5 bc0 fs17 fc10 w100" v-model="state.question.content" placeholder="질문을 입력해주세요"></textarea>

                    <div class="qa_btn">
                        <button class="btn_black fwt500"  @click="setProductquestion">문의하기</button>
                    </div>
                    <!-- v-for -->
                    <div class="qa_box2 br5 bc0 fc10" v-for="(item,index) in state.questionList" :key="index">
                        <div class="question" :class="'question'+item.id" >
                            <div class="inner rel">
                                <div class="name fs17 fwt500">{{item.regUserNm}}</div>
                                <div class="date fs15">{{item.regDate}}</div>
                                <div class="cont fs15" >
                                {{ item.content }}
                                </div>
                                <textarea name="name" rows="8" cols="80" class="w100" placeholder="질문을 입력해주세요" style="display: none;"></textarea>
                                <div class="btn_area flex alc abs top0 right0">
                                    <button class="btn_border ok_btn"  @click ="modifyReply('question',item)" style="display: none;">확인</button>
                                    <button class="btn_border ok_cancel" @click="cancelReply('question',item.id)" style="display: none;">취소</button>
                                    <button class="btn_border update_btn" @click="editReply('question',item.id)">수정</button>
                                    <button class="btn_border delete_btn" @click="delQuestion('question',item.id)">삭제</button>
                                </div>
                            </div>
                        </div>

                        <div class="answer" v-if="item.answer==null">
                            <div class="inner rel">
                                <div class="tit fs17 fwt500">문의하신 사항에 답변을 등록해주세요.</div>
                                <textarea name="name" rows="8" cols="80" class="w100" placeholder="답변을 입력해주세요" v-model="state.answer.content"></textarea>
                                <button class="btn_black fwt500 ans_btn block m_center" @click="setProductAnswer">답변등록</button>
                            </div>
                        </div>

                        <div class="answer" :class="'answer'+item.answer.id" v-if="item.answer">
                            <div class="inner rel">
                                <div class="name fs17 fwt500 flex alc">
                                    {{item.answer.regUserNm}}
                                    <span class="fc0 fs14 inblock">담당자</span>
                                </div>
                                <div class="date fs15">{{item.answer.regDate}}</div>
                                <div class="cont fs15">
                                    {{item.answer.content}}
                                </div>
                                <textarea name="name" rows="8" cols="80" class="w100" placeholder="질문을 입력해주세요" style="display: none;"></textarea>
                                <div class="btn_area flex alc abs top0 right0">
                                    <button class="btn_border ok_btn" @click ="modifyReply('answer',item)" style="display: none;">확인</button>
                                    <button class="btn_border ok_cancel" @click="cancelReply('answer',item.answer.id)" style="display: none;">취소</button>
                                    <button class="btn_border update_btn" @click="editReply('answer',item.answer.id)">수정</button>
                                    <button class="btn_border delete_btn" @click="delQuestion('answer',item.answer.id)">삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- v-for -->
                </div>

            </div>
        </div>
    </div>
    <Modal></Modal>

</div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { _getProductDetail, _setProductAnswer
    , _setProductquestion, _getProductquestionList
    , _modifyProductAnswer, _modifyProductQuestion,
    _delProductQuestion, _delProductAnswer
} from '@/api/moviewApis.js';
import { clip } from '@/utils/commonFn.js';
import Modal from '@/views/modal/modal.vue';

export default {
    components: {Modal},
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            question: {
                content: ''
            },
            answer: {
                content: ''
            },
            questionList: [
                {id: '',
                    title: '',
                    content: '',
                    regUserNm: '',
                    regDate: '',
                    answer: {
                        id: '',
                        questionId: '',
                        title: '',
                        content: '',
                        regUserNm: '',
                        regDate: ''
                    }
                }
            ]

                
        });
        onMounted(() => {
            getProductDetail();
            getProductquestionList();
        });
        const getClip = () => {
            clip(route.query);
        };
        //모달창 열기
        const getModal = (v) => {
            const param = {
                managerName: '모두의인터뷰',
                managerPhone: '01012341234',
                managerEmail: 'admin@moview.com'
            };
            emitter.$emit('modalOpen', v, param);
        };
        //상세내용 조회
        const getProductDetail = async () => {
            // let params = {};
            const response = await _getProductDetail(route.query.id);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('상세 내용이 조회 되었습니다');
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        //질문 리스트 조회
        const getProductquestionList = async () => {
            let params = {
                productId: route.query.id,
                paging: 1
            };
            const response = await _getProductquestionList(params);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    state.questionList = response.data.data;
                    console.log(state.questionList);
                    console.log('질문 리스트 조회 되었습니다');
                    
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        //문의 등록
        const setProductquestion = async () => {
            let params = {
                userId: 'user001',
                //from v-model input
                content: state.question.content
            };
            const response = await _setProductquestion(params);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('상품 질문이 등록 되었습니다');
                    state.question.content = '';
                    getProductquestionList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        //답변 등록
        const setProductAnswer = async () => {
            let params = {
                userId: 'user001',
                //from v-model input
                content: state.answer.content
            };
            const response = await _setProductAnswer(params);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('답변이 등록 되었습니다');
                    state.answer.content = '';
                    getProductquestionList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        //질문 수정 클릭
        const editReply = (type, id) => {
            document.querySelector('.' + type + id + ' .cont').style.display = 'none';
            document.querySelector('.' + type + id + ' .update_btn').style.display = 'none';
            document.querySelector('.' + type + id + ' .delete_btn').style.display = 'none';
            document.querySelector('.' + type + id + ' textarea').style.display = 'block';
            document.querySelector('.' + type + id + ' .ok_btn').style.display = 'block';
            document.querySelector('.' + type + id + ' .ok_cancel').style.display = 'block';
        };
        //수정 취소 클릭 
        const cancelReply = (type, id) => {
            document.querySelector('.' + type + id + ' .cont').style.display = 'block';
            document.querySelector('.' + type + id + ' .update_btn').style.display = 'block';
            document.querySelector('.' + type + id + ' .delete_btn').style.display = 'block';
            document.querySelector('.' + type + id + ' textarea').style.display = 'none';
            document.querySelector('.' + type + id + ' .ok_btn').style.display = 'none';
            document.querySelector('.' + type + id + ' .ok_cancel').style.display = 'none';
            document.querySelector('.' + type + id + ' textarea').value = '';
        };
        //질문 수정내용 저장
        const modifyReply = async (type, item) => {
            let params = '';
            let typeNm = '';
            let response = '';
            if (type == 'answer') {
                params = item.answer.id;
                response = await _modifyProductAnswer(params);
                typeNm = '답변';
            } else if (type == 'question') {
                params = item.id;
                response = await _modifyProductQuestion(params);
                typeNm = '질문';
            } try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log(typeNm + '이 수정 되었습니다');
                    cancelReply(type, params);
                    getProductquestionList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };

        //질문 삭제
        const delQuestion = async (type, item) => {
            let params = item;
            let typeNm = '';
            let response = '';
            if (type == 'answer') {
                response = await _delProductAnswer(params);
                typeNm = '답변';
            } else if (type == 'question') {
                response = await _delProductQuestion(params);
                typeNm = '질문';
            } try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log(typeNm + '이 삭제 되었습니다');
                    cancelReply(type, params);
                    getProductquestionList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };




        /** 뷰페이지 문의하기 **/
// $('.qa_box2 .btn_area .update_btn').on('click',function(){
//     $(this).parents('.btn_area').siblings('.cont').hide();
//     $(this).parents('.btn_area').siblings('textarea').show();
//     $(this).hide();
//     $(this).siblings('.ok_btn').show();
// })

// $('.qa_box2 .btn_area .ok_btn').on('click',function(){
//     $(this).parents('.btn_area').siblings('.cont').show();
//     $(this).parents('.btn_area').siblings('textarea').hide();
//     $(this).hide();
//     $(this).siblings('.update_btn').show();
// })



        return {
            state,
            getProductDetail,
            getModal,
            getClip,
            getProductquestionList,
            setProductAnswer,
            setProductquestion,
            editReply,
            modifyReply,
            delQuestion,
            cancelReply
        };
    }
};
</script>
<style scoped>

</style>
