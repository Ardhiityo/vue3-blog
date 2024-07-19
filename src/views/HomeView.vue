<template>
  <div>
    <Navbar />
    <PageHeader :image="image" />
    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="err">{{ err }}</div>
      <PostList :posts="posts" />
    </div>
    <FooterVue />
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
const { image } = defineProps(["image"]);
import Loading from "@/components/Loading.vue";
import getPosts from "@/composable/getPosts";
import PostList from "../components/post/PostList.vue";
import Navbar from "@/components/Navbar.vue";
import PageHeader from "@/components/PageHeader.vue";
import FooterVue from "@/components/FooterVue.vue";
const { posts, err, load, loading } = getPosts();
onMounted(() => {
  load();
});
</script>