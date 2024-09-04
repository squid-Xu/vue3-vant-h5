<template>
    <van-tabbar v-model="active" placeholder route>
        <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to">
            {{ item.title }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
const active = ref(0);
const tabbarData = reactive([
    {
        icon: 'home-o',
        title: '首页',
        to: {
            name: 'Home'
        }
    },
    {
        icon: 'search',
        title: '示例',
        to: {
            name: 'Demo'
        }
    },
    {
        icon: 'friends-o',
        title: '关于',
        to: {
            name: 'About'
        }
    }
]);
</script>
