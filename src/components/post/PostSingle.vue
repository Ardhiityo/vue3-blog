<template>
  <div class="post-preview">
    <RouterLink :to="{ name: 'article', params: { id: post.id } }">
      <h2 class="post-title">
        {{ post.title }}
      </h2>
      <h3 class="post-subtitle">{{ post.body }}</h3>
    </RouterLink>

      <span class="post-meta mx-1" v-for="tag in post.tags" :key="tag">
        <RouterLink :to="{name: 'tag', params: { tags : tag }}">
          #{{ tag }}
        </RouterLink>
      </span>
  </div>
  <hr class="my-4" />
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { post } = defineProps(["post"]);
</script>