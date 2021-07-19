<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-defailt">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入购物车</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button
                @click="addtoBasket(item, option)"
                class="btn btn-sm btn-outline-success"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.price">
            <tr>
              <td>
                <button @click="decreaseQuantity(item)" class="btn btn-sm">
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)" class="btn btn-sm">
                  +
                </button>
              </td>
              <td>{{ item.name }}{{ item.size }}</td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{ total + "RMB" }}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{ basketText }}
      </div>
    </div>
  </div>
</template>
<script>
import vuex from "vuex";
// import axios from 'axios'
export default {
  data() {
    return {
      baskets: [],
      basketText: "购物车没有任何商品",
      getMenuItems: {},
    };
  },
  computed: {
    //  getMenuItems:{
    // //   //在vuex中获取数据
    // //   //第一种方法
    // //   return this.$store.state.menuItems;
    // //通过getter获取数据
    // get(){
    //   return this.$store.getters.getMenuItems
    // },
    // set(){}
    //  },
    total() {
      let totalCost = 0;
      for (let index in this.baskets) {
        let individualItem = this.baskets[index];
        totalCost += individualItem.quantity * individualItem.price;
      }
      return totalCost;
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    //这是使用es6自带的fetch
    fetchData() {
      //       fetch("https://blog-e51ae-default-rtdb.firebaseio.com/menu.json")
      // .then(res=>{
      //   return res.json()
      // })
      // .then(data =>{
      //     this.getMenuItems=data
      // })
      //这是用axios来获取数据
      // axios.get("menu.json")
      // .then(res =>this.getMenuItems =res.data)
      //这是使用vue原型
      this.http.get("menu.json").then((res) => (this.getMenuItems = res.data));

      //将请求下来的数据存储到vuex中
      // this.http.get("menu.json")
     //  .then(res => this.$store.commit("setMenuItems",res.data));
    },
    addtoBasket(item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1,
      };
      if (this.baskets.length > 0) {
        //过滤
        let result = this.baskets.filter((basket) => {
          //过滤是否与购物车东西相等
          return basket.name === item.name && basket.price === option.price;
        });
        if (result != null && result.length > 0) {
          //如果有则+1
          result[0].quantity++;
        } else {
          //如果里面没有这个数据则加入
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    removeFromBasket(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1);
    },
  },
};
</script>