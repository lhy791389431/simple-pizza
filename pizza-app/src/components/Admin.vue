<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
    <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table ">
        <thead class="table table-default">
          <tr>
            <td>品种</td>
            <td>删除</td>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from './NewPizza.vue'
export default {
  data(){
    return{
       getMenuItems:[]
    }
  },
  components:{
    'app-new-pizza':NewPizza
  },
  connputed:{
   
  },
  created(){
    fetch("https://blog-e51ae-default-rtdb.firebaseio.com/menu.json")
    .then(res=>{
      return res.json()
    })
    .then(data =>{
     let menuArray=[]
     for(let key in data){
      data[key].id=key;
      menuArray.push(data[key])
     }
     this.getMenuItems=menuArray
    })

  },
  methods:{
    deleteData(item){
      fetch("https://blog-e51ae-default-rtdb.firebaseio.com/menu/"+item.id+"/.json",{
        method:"DELETE",
        headers:{
          'Content-type':'application/json'
        }
      })
      .then(res =>res.json())
      .then(data =>this.$router.push({name:"menuLink"}))
     .then(data=> this.$router.push('/admin')) 
     .then(alert("已删除："+item.name+"的PIZZA"))
      //.then(location.reload())
     // .then(this.$router.go(0))
      
    //  .catch(err=>console.log(err))
    }
  }
}
</script>