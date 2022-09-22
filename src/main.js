import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import breakingBad from "@/mixins/breakingBad";
import animateItems from "@/mixins/animations/animateItems";

const app = createApp({
    extends: App,
    mixins: [breakingBad, animateItems],
    created() {
        this.fetchAllDataBreakingBad()
    }
})

app
    .use(store)
    .use(router)
    .mount('#app')
