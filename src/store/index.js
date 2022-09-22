import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import {storeBreakingBad} from "@/store/storeBreakingBad";
const vuexLocalStorage = new VuexPersistence({
  key: 'vuexStoreBreakingBad',
  storage: window.localStorage
})

export default createStore({
  modules: {
    storeBreakingBad: storeBreakingBad
  },
  plugins: [vuexLocalStorage.plugin]
})