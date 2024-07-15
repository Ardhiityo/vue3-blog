<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ subs }}</p>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const { post } = defineProps(["post"]);

const subs = computed(() => {
  return post.content.substring(0, 50) + "...";
});
</script>