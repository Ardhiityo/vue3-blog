<template>
  <div>
    <h1>Homepage</h1>
    <div v-if="err">{{ err }}</div>
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import getPosts from "@/composable/getPosts";
import PostList from "../components/PostList.vue";
const { posts, err, load } = getPosts();
load();
</script>