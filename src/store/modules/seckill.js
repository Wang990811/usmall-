import {reqSeckillList} from '../../util/request'
const state = {
    list:[],//秒杀活动初始值
}
const mutations = {
    changeList(state,arr){
        state.list = arr;
    }
}
const actions = {
    requestSeckillList(context) {
        reqSeckillList().then(res=>{
            context.commit('changeList',res.data.list);
        })
    }
}
const getters = {
    list(state){
        return state.list;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}