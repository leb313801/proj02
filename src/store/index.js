import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 작성한 모듈을 가져옵니다.
import userStore from '@/store/modules/userStore.js'
import postStore from '@/store/modules/postStore.js'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // 키: 값 형태로 저장됩니다.
    userStore: userStore,
    postStore: postStore
  }
})
