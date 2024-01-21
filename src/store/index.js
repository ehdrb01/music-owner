import { createStore } from 'vuex';
import moduleA from './modules/moduleA';
import authModule from './modules/auth';
import tokenLogin from './modules/token';

const store = createStore({
    namespaced: true,
    modules: {
        authModule,
        moduleA,
        tokenLogin
    }
});

export default store;
