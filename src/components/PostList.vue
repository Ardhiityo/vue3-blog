<template>
  <div v-for="(post, index) in posts" :key="index">
    <PostSingle :post="post" />
  </div>
</template>

<script setup>
import PostSingle from "../components/PostSingle.vue";
import { defineProps, onMounted, onUpdated, onUnmounted } from "vue";
const { posts } = defineProps(["posts"]);

// onMounted(() => console.log("Mounted"));
// onUnmounted(() => console.log("Unmounted"));
// onUpdated(() => console.log("Update"));
</script>

<style scoped>
</style>