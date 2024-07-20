<template>
  <div>

    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Show based on tags</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="err">{{ err }}</div>

      <PostList :posts="showTags" />
    </div>
  </div>
</template>


<script setup>
import { onMounted, defineProps, computed } from "vue";
const { image } = defineProps(["image"]);
import Loading from "@/components/Loading.vue";
import getPosts from "@/composable/getPosts";
import PostList from "../components/post/PostList.vue";
const { posts, err, loading } = getPosts();

import {useRoute} from "vue-router";
const route = useRoute();

const showTags = computed(() => {
    return posts.value.filter(post => post.tags.includes(route.params.tag))
})

</script>