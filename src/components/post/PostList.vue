<template>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-for="post in posts" :key="post.id">
          <PostSingle :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { posts } = defineProps(["posts"]);
import PostSingle from "@/components/post/PostSingle.vue";
</script>