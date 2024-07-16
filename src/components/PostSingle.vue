<template>
  <div>
    <RouterLink :to="{name: 'article', params: { id: post.id }}">
      <h2>{{ post.title }}</h2>
    </RouterLink>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { post } = defineProps(["post"]);
</script>