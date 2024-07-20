<template>
  <div>

    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ post.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="loading">
          <Loading />
        </div>
        <div v-else>
          <div v-if="err">
            {{ err }}
          </div>
          <div v-else>
            <p>{{ post.body }}</p>

            <div class="d-flex flex-wrap gap-2">
              <div v-for="tag in post.tags" :key="tag">
                <p>{{ tag }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import getPost from "@/composable/getPost";
import { onMounted, defineProps } from "vue";
const { image } = defineProps(["image"]);
import { useRoute } from "vue-router";
const route = useRoute();
const { post, err, loading } = getPost(route.params.id);
</script>