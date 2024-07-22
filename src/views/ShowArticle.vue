<template>
  <div>
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <div v-if="loading">
                <Loading />
              </div>
              <div v-else>
                <div v-if="errors">
                  <h1>{{ errors }}</h1>
                </div>
                <div v-else>
                  <h1>{{ post.title }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="!errors">
          <p>{{ post.body }}</p>
          <div class="d-flex flex-wrap gap-2">
            <div v-for="tag in post.tags" :key="tag">
              <p>#{{ tag }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getPost } from "@/composable/getPost";
const route = useRoute();
const loading = ref(true);
const { getId, err } = getPost();
const post = ref({});
const errors = ref(null);

async function getData() {
  try {
    const result = await getId(route.params.id);
    if (result) {
      post.value = result;
    } else {
      throw new Error("Ups, data not found");
    }
  } catch (error) {
    errors.value = error.message || err;
  } finally {
    loading.value = false;
  }
}
getData();
</script>