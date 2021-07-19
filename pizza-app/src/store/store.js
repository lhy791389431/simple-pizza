import Vue from 'Vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store= new Vuex.Store({
    state:{//主要是存储数据
        menuItems:{},
        currentUser:null,
        isLogin:false,
        
    },
    getters:{//用来获取state里面的数据状态
        getMenuItems: state=>state.menuItems,
        currentUser:state =>state.currentUser,
        isLogin:state=>state.isLogin

    },
    mutations:{//更改属性的状态
        setMenuItems(state,data){
            state.menuItems=data
        }

    },
    actions:{//应用mutations
    },
    modules:{}
})