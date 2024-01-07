<template>
    <div class="layout">
        <moview_header />
            <RouterView />
        <moview_footer />
    </div>
</template>
<script>
import { reactive, onMounted, watch, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import moview_header from '@/components/layout/header.vue';
import moview_footer from '@/components/layout/footer.vue';

export default {
    components: { moview_header, moview_footer },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
        });
        return {
        };
    }
};
import '@/assets/css/reset.css';
import '@/assets/css/basic.css';
import '@/assets/css/swiper.min.css';
import '@/assets/css/style.css';
</script>
<style>
  @import "https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css";
</style>