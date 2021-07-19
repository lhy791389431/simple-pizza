<template>
  <header >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#" aria-label="Product">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="d-block mx-auto"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <title>Product</title>
          <circle cx="12" cy="12" r="10" />
          <path
            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
          />
        </svg>
      </a>
      <a href="/" class="navbar-brand">Pizza点餐系统</a>
      <ul class="navbar-nav">
        <!-- <li><router-link tag="a" :to="homeLink" class="nav-link">主页</router-link></li> -->
        <li>
          <router-link :to="{ name: 'homeLink' }" class="nav-link"
            >主页</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'menuLink' }" class="nav-link"
            >菜单</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'adminLink' }" class="nav-link"
            >管理</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'aboutLink' }" class="nav-link"
            >关于我们</router-link
          >
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li>
          <router-link
            :to="{ name: 'loginLink' }"
            class="nav-link"
            v-show="isLogin"
            >登录</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'registerLink' }"
            class="nav-link"
            v-show="isLogin"
            >注册</router-link
          >
        </li>
        <li class="nav-link" v-show="!isLogin" >
          {{ userName }}
        </li>
        <!-- <li><router-link :to="{name:'homeLink'}" class="nav-link"  v-if="!isLogin">退出</router-link></li> -->
        <li><button v-on:click="tuichu" v-if="!isLogin">退出</button></li>
        <li><button v-on:click="Gs" v-if="isLogin">更新登录数据</button></li>
      </ul>
    </nav>
    <div class="alert alert-warning alert-dismissible" v-if="isLogin" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Warning!</strong> 请您先登录
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isLogin: true,
      userName: "",
    }
  },
 
   watch:{
       "$route":{
           wiyi(){
               alert("路有变化了");
               that.init()},
               deep:true
       }
   },
  methods: {
      
    tuichu() { this.isLogin = true;
      this.userName = "";
        location.reload();
      this.$router.go(0);
     
    },
    Gs() {
         if(this.$route.params.userName===undefined){alert("没数据")}
         else{
      console.log(this.$route.params.userName);
      this.isLogin = this.$route.params.isLogin;
      this.userName = this.$route.params.userName;}
    },
  },
 
  
};
</script>
