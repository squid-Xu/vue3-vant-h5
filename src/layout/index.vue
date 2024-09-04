<script setup lang="ts">
import tabbar from "@/components/Tabbar/index.vue";
import NavBar from "@/components/NavBar/index.vue";


</script>

<template>
  <div>
      <nav-bar />
      <router-view v-slot="{ Component }">
          <component :is="Component" />
      </router-view>
      <tabbar />
  </div>
</template>