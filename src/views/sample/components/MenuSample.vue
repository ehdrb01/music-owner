<template>
    <div class="guides">
        <div class="sample">
            <pre class="language-javasciprt">
                <code class="language-javasciprt"  v-html="state.sampleCodeJS"  />
            </pre>
        </div>
    </div>
</template>
<script>

import { reactive} from 'vue';
export default {
    setup() {
        const state = reactive({
            sampleCodeJS: `
export const menuList = [
    {
        label: '1depth메뉴명', url: '', depth: 서브메뉴 유무(Boolean)초기값 false, isActive: 활성화 유무(Boolean) 초기값 false,
        depth_sub: [
            {
                label: '2depth메뉴명',
                url: '',
                isActive: 활성화 유무(Boolean)초기값 false,
                menuitems: [
                    { label: '3depth메뉴명', url: '페이지 경로', isActive: 활성화 유무(Boolean)초기값 false },
                    { label: '3depth메뉴명', url: '페이지 경로', isActive: 활성화 유무(Boolean)초기값 false }
                ]
            },
        ]
    }
]`
        });
        return {
            state
        };
    }
};
</script>
