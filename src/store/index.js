import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import menu from './modules/menu'
import role from './modules/role'
import manger from './modules/manger'
import cate from './modules/cate'
import user from './modules/user'
import spec from './modules/spec'

import vip from './modules/vip'
import banner from './modules/banner'
export default new Vuex.Store({
    modules:{
        menu,
        role,
        manger,
        cate,
        user,
        spec,
        
        vip,
        banner,
    }
})