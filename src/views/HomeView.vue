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
import { ref } from "vue";
const posts = ref([]);
const err = ref(null);

const load = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");
    if (response.ok) {
      const data = await response.json();
      posts.value = data;
    } else {
      throw Error("Data gagal dimuat");
    }
  } catch (error) {
    err.value = error.message;
  }
};

load();
</script>