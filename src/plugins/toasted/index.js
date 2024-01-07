import { createApp } from 'vue';
import App from '@/App.vue';
import Toasted from 'vue-toasted';
const app = createApp(App);
app.use(Toasted);



const defaultOptions = {
    theme: 'default',
    type: 'default',
    containerClass: 'toasted-container-custom',
    className: 'toasted-custom',
    closeOnSwipe: false,
    position: 'bottom-center',
    duration: 3000,
    singleton: true
};

/**
 * Global toasted(message, types, duration)
 *
 * @param {String} message - can be included '\n'
 * @param {Object} types - success, error, default
 * @param {types} duration - duration(ms)
 *
 */
window.toast = app.config.globalProperties.$toast = (message, duration, types = 'success') => {
    const setOptions = Object.assign({}, { ...defaultOptions });

    if (!!duration) setOptions.duration = duration;
    if (!!setOptions.singleton) app.toasted.clear();
    // if (options !== null && typeof options !== 'object') return Vue.toasted.error(new TypeError('\'options\' expected \'object\''), defaultOptions);

    switch (types) {
        case 'success':
            return app.toasted.success(message, setOptions);
        case 'error':
            return app.toasted.error(message, setOptions);
        case 'default':
            return app.toasted.show(message, setOptions);
    }
};

window.toastClearAll = app.prototype.$toastClearAll = () => app.toasted.clear();




