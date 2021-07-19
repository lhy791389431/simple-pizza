<template>
  <div class="row mt-3">
    <div class="col--md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" style="height:300px" src="../../src/assets/2.jpg" alt="">
          <form @submit.prevent="onSubmit">
          <div class="from-group">
            <label for="email">邮箱</label>
            <input type="email" class="form-control" v-model="email">
          </div>
           <div class="from-group">
            <label for="password">密码</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <button type="submit"  class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
   data(){
    return{
      email:'',
      password:'',
      userName:'',
      isLogin:false,
      gg:ture,
     
    }
  },
  
  methods:{
    
    onSubmit(){
     axios.get('/users.json')
     .then(res=>{
      //  console.log(res.data)
      const data=res.data
      const users=[]
      for(let key in data){
        const user=data[key]
       users.push(user)
      }
      let result=users.filter((user)=>{
        return user.email===this.email  &&  user.password===this.password
      })
      //console.log(result)
      //判断是否存在
      if(result !=null && result.length>0){
        this.$router.push({
          name:'homeLink',
         params:{
           userName:555,
           isLogin:false,
           gg:true
           }
          })
         // .then(location.reload())
     // .then(this.$router.go(0))
      }else{ alert("账号或密码错误")}
     })
    }
  }
}
</script>