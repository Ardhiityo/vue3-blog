<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <PostSingle :post="post" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { posts } = defineProps(["posts"]);
import PostSingle from "@/components/PostSingle.vue";
</script>