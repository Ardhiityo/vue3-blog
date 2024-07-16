<template>
  <div>
    <div v-if="err">
      {{ err }}
    </div>
    <div v-else>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import getPost from "@/composable/getPost";
import { useRoute } from "vue-router";
const route = useRoute();
const { post, err, load } = getPost(route.params.id);
load();
</script>