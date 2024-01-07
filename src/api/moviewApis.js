import axios from 'axios';
//마이페이지 - 내가 등록한 인터뷰 리스트 조회
export const _delPost = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};

//마이페이지 - 내가 등록한 인터뷰 리스트 조회
export const _getMyRegInterview = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                mylist: [
                    {id: 1, regDate: '2022-10-11', title: '식료품 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 2, regDate: '2022-11-11', title: '신선식품 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 3, regDate: '2022-10-12', title: '제작플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 4, regDate: '2022-11-12', title: 'AI 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 5, regDate: '2022-10-13', title: '의료 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 6, regDate: '2022-11-13', title: '인쇄 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 7, regDate: '2022-10-14', title: '컨텐츠 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 8, regDate: '2022-11-14', title: '소셜 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 9, regDate: '2022-10-15', title: '금융 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 10, regDate: '2022-11-15', title: '전자기기 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'},
                    {id: 11, regDate: '2022-10-16', title: '코스메틱 플랫폼 인터뷰이를 급하게 모집하고 있습니다.'}
                ]
                
            }
        }
    };
};

//상품 질문 등록
export const _setProductAnswer = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};

//상품 질문 등록
export const _setProductquestion = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};
//상품 질문 수정
export const _modifyProductQuestion = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};
//상품 답변 수정
export const _modifyProductAnswer = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};
//상품 질문 삭제
export const _delProductQuestion = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};
//상품 답변 삭제
export const _delProductAnswer = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};

//싱품 질문 리스트 조회
export const _getProductquestionList = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: [
                {
                    id: 1,
                    title: '질문1',
                    content: '질문입니다1.질문입니다1.질문입니다1.질문입니다1.질문입니다1.질문입니다1.질문입니다1.',
                    regUserNm: '김승진',
                    regDate: '2023-12-12'
                },
                {
                    id: 2,
                    title: '질문2',
                    content: '질문입니다2.질문입니다2.질문입니다2.질문입니다2.질문입니다2.질문입니다2.질문입니다2.',
                    regUserNm: '김진',
                    regDate: '2023-12-11',
                    answer: {
                        id: 1,
                        questionId: 2,
                        title: '답변2',
                        content: '답변입니다 안녕하세요.',
                        regUserNm: '운영자',
                        regDate: '2023-12-11'
                    }
                },
                {
                    id: 3,
                    title: '질문3',
                    content: '질문입니다3.질문입니다3.질문입니다3.질문입니다3.질문입니다3.질문입니다3.질문입니다3.',
                    regUserNm: '서울시',
                    regDate: '2023-12-10',
                    answer: {
                        id: 2,
                        questionId: 3,
                        title: '답변1',
                        content: '답변입니다 안녕하세요.',
                        regUserNm: '국회',
                        regDate: '2023-12-11'
                    }
                },
                {
                    id: 4,
                    title: '질문4',
                    content: '질문입니다4.질문입니다4.질문입니다4.질문입니다4.질문입니다4.질문입니다4.질문입니다4.',
                    regUserNm: '둘리',
                    regDate: '2023-12-07'
                }, {
                    id: 5,
                    title: '질문5',
                    content: '질문입니다5.질문입니다5.질문입니다5.질문입니다5.질문입니다5.질문입니다5.질문입니다5.',
                    regUserNm: '홍길동',
                    regDate: '2023-12-03'
                }
                
            ]
        }
    };
};
//상품 상세
export const _getProductDetail = async (params) => {
    console.log('apigetparam:' + params);
    return await {
        data: {
            code: 200,
            data: {
                title: 'success'

            }
        }
    };
};

export const _getProductList = async (params) => {
    console.log(params);
    return await {
        data: {
            code: 200,
            data: [{
                title: '의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '2의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '3의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '4의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '6의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '7의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '8의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }, {
                title: '9의류재활용 관련 공모전 인터뷰이 모집합니다1',
                ItvType: '대면',
                location: '서울',
                pay: 30000,
                productType: '사용성'
            }]
        }
    };
    // return await $api.post('/bfmavm/api/v1/map/categoryList', params);
};

export const _registInterView = async (params) => {
    console.log(params);
    return await {
        data: {
            code: 200,
            data: '_registInterView test !!!'
        }
    };
    // return await $api.post('/bfmavm/api/v1/map/categoryList', params);
};

export const _getEmailId = async (params) => {
    console.log(params);
    return await {
        data: {
            code: 200,
            data: '_getEmailId test !!!'
        }
    };
    // '_getEmailId test !!!';
    // return await $api.post('/bfmavm/api/v1/map/categoryList', params);
};
export const _getPassword = async (params) => {
    console.log(params);
    return await {
        data: {
            code: 200,
            data: '_getPassword test !!!'
        }
    };
    // return await '_getPassword test !!!';
    // return await $api.post('/bfmavm/api/v1/map/categoryList', params);
};