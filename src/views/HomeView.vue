<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <h1>Homepage</h1>
      <div v-if="err">{{ err }}</div>
      <PostList :posts="posts" />
    </div>
    
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Loading from "@/components/Loading.vue";
import getPosts from "@/composable/getPosts";
import PostList from "../components/PostList.vue";
const { posts, err, load, loading } = getPosts();
onMounted(() => {
  load();
});
</script>