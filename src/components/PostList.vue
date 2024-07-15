<template>
  <div v-for="(post, index) in posts" :key="index">
    <PostSingle :post="post" />
  </div>
</template>

<script setup>
import PostSingle from "../components/PostSingle.vue";
import { defineProps } from "vue";
const { posts } = defineProps(["posts"]);
</script>

<style scoped>
</style>