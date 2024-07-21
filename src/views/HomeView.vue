<template>
  <div>
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
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
      <div v-else>
      <PostList :posts="posts" />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Loading from "@/components/Loading.vue";
import PostList from "../components/post/PostList.vue";
import { getPosts } from "@/composable/getPosts";
const { posts, err, load } = getPosts();
const loading = ref(true);
function loadingHandler() {
  load()
    .then((result) => {
      loading.value = result;
    })
    .catch((err) => {
      loading.value = false;
    });
}
loadingHandler();
</script>