const authModule = {
    namespaced: true,
    state: {
        isLogin: false,
        userId: '',
        password: '',
        token: '',
        userType: ''
    },
    getters: {
        userInfo(state) {
            return state;
        }
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.isLogin = true;
            state.userId = data.userId;
            state.password = data.password;
            state.token = data.token;
            state.userType = data.userType;
        },
        SET_USER_RESET(state, data) {
            state.isLogin = false;
            state.userId = data.userId;
            state.password = data.userId;
            state.token = data.userId;
            state.userType = data.userId;
        },
        SET_USER_ERROR(state, errordata) {
            state.isLogin = false;
            state.userId = data.userId;
            console.log(errordata);
        }
    },
    actions: {
        loginAction(context, value) {
            // value 여기서 키 암호화 로직
            const params = {
                ...value
            };
            // 로그인 임시처리
            context.commit('SET_USER_INFO', params);
            console.log('context');
            console.log(context);
            console.log('value');
            console.log(value);
            console.log('params');
            console.log(params);
            localStorage.setItem('userInfo', JSON.stringify(params));
            //로그인 API 호출
            // return new Promise((resolve, reject) => {
            //     login(params)
            //         .then((res) => {
            //             if (res.data.code === 200) {
            //                 // 실행 결과 값을 가지고 뮤테이션 호출
            //                 context.commit(Mutations.SET_USER_INFO, res.data.data);
            //                 localStorage.setItem('userInfo', JSON.stringify(res.data.data));
            //                 resolve(res.data.data);
            //             } else {
            //                 // 에러케이스
            //                 context.commit(Mutations.SET_USER_ERROR, res.data);
            //                 reject(res.data);
            //             }
            //         })
            //         .catch((error) => {
            //             // 예외 처리 시 값을 반환합니다.
            //             context.commit(Mutations.SET_USER_ERROR, error);
            //             reject(error);
            //         });
            // });
        },
        logoutAction(context, value) {
            const params = {
                ...value
            };
            context.commit('SET_USER_RESET', params);
            localStorage.setItem('userInfo', JSON.stringify(params));
            //로그아웃 API 호출
            // return new Promise((resolve, reject) => {
            //     login(params)
            //         .then((res) => {
            //             if (res.data.code === 200) {
            //                 // 실행 결과 값을 가지고 뮤테이션 호출
            //                 context.commit(Mutations.SET_USER_INFO, res.data.data);
            //                 localStorage.setItem('userInfo', JSON.stringify(res.data.data));
            //                 resolve(res.data.data);
            //             } else {
            //                 // 에러케이스
            //                 context.commit(Mutations.SET_USER_ERROR, res.data);
            //                 reject(res.data);
            //             }
            //         })
            //         .catch((error) => {
            //             // 예외 처리 시 값을 반환합니다.
            //             context.commit(Mutations.SET_USER_ERROR, error);
            //             reject(error);
            //         });
            // });

        }
    }

};
export default authModule;