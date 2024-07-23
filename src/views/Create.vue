<template>
  <div>
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Create a New Post</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <div v-if="btn">
                <Loading />
              </div>
              <div v-else>
                <FormVue @createPost="sendPost"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
const btn = ref(false);
import { post } from "@/composable/post.js";
const { createPost } = post();
import FormVue from "@/components/FormVue.vue";

function sendPost(titleForm, bodyForm, tagsForm) {
  createPost(titleForm, bodyForm, tagsForm);
  return (btn.value = !btn.value);
}
</script>
