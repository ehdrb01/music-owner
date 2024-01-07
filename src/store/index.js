import { createStore } from 'vuex';
import moduleA from './modules/moduleA';
import authModule from './modules/auth';

const store = createStore({
    namespaced: true,
    modules: {
        authModule,
        moduleA
    }
});

export default store;
