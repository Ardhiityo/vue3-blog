<template>
  <div>
    <RouterLink :to="{ name: 'article', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </RouterLink>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag">
      <p>{{ tag }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { post } = defineProps(["post"]);
</script>