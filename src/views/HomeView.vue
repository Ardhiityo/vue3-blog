<template>
  <div>
    <h1>Homepage</h1>
    <div v-if="err">{{ err }}</div>
    <div v-else v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import getPosts from "@/composable/getPosts";
const { posts, err, load } = getPosts();
load();
</script>