<template>
  <div>
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div v-if="loading">
              <Loading />
            </div>
            <div v-else>
              <div class="site-heading">
                <h1>#{{ tags }}</h1>
              </div>
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
import { onMounted, defineProps, ref } from "vue";
const { image } = defineProps(["image"]);
import Loading from "@/components/Loading.vue";
import { getPosts } from "@/composable/getPosts";

import PostList from "../components/post/PostList.vue";
const { load, err } = getPosts();

import { useRoute } from "vue-router";
const route = useRoute();

const posts = ref();
const loading = ref(true);

const tags = route.params.tags;

function getTag() {
  load().then((result) => {
    posts.value = result.filter((p) => p.tags.includes(tags));
    loading.value = false;
  });
}
onMounted(() => getTag());
</script>