<template>
    <div class="layout" v-if="route.params?.storeNo">
        <moview_header />
            <RouterView />
        <moview_footer />
    </div>
    <!-- just url -->
    <div v-else class="just_index">
        <div class="text">
            MUSIC OWNER
        </div>
    </div>
</template>
<script>
import { reactive, onMounted, watch, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import moview_header from '@/components/layout/header.vue';
import moview_footer from '@/components/layout/footer.vue';
import { _getStore } from '@/api/ourplay.js';
export default {
    components: { moview_header, moview_footer },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            
        });

        return {
            route
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