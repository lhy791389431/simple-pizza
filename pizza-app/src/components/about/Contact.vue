<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">791389431</p>
             <router-link :to="{name:'PersonName'}">私人名字</router-link>
           <router-link :to="{name:'Phone'}">电话</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>