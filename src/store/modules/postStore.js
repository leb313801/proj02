const postStore = {
    namespaced: true,
    state: {
        postList: [
            {
                title: 'vuex 쉽게 알아보기',
                author: '도로시'
            },
            {
                title: 'axios 알아보기',
                author: '도로시'
            },
            {
                title: 'react 알아보기',
                author: '토토'
            }                         
        ],
        chartData: []
    },
    getters: {
        GE_POST_LIST: state => state.postList,
        GE_CHART_DATA: state => state.chartData
    },
    mutations: {
        MU_POST_LIST: (state, payload) => {
            state.postList = payload
        },
        MU_CHART_DATA: (state, jsonData) => {
            state.chartData = jsonData
        }
    },
    actions: {
        AC_USER_NAME: ({ commit }, payload) => {
            commit('MU_POST_LIST', payload)
        },
        AC_CHART_DATA: ({commit}, jsonData) => {
            commit('MU_CHART_DATA', jsonData)
        }
    }
}

export default postStore