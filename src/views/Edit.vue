<template>
  <div>
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Edit Post</h1>
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
              <div v-if="loading">
                <Loading />
              </div>
              <div v-else>
                <FormVue :title="title" :body="body" @editPost="updatePost" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import FormVue from "@/components/FormVue.vue";
import { getPost } from "@/composable/getPost";
import Loading from "@/components/Loading.vue";
const { getId } = getPost();
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

import { ref, onMounted } from "vue";
const title = ref("");
const body = ref("");
const loading = ref(true);

import { db } from "@/firebase/config.js";
import { doc, updateDoc } from "firebase/firestore";

function toFrom() {
  getId(route.params.id)
    .then((result) => {
      title.value = result.title;
      body.value = result.body;
    })
    .catch((err) => {
      title.value = "";
      body.value = "";
    })
    .finally(() => (loading.value = !loading.value));
}
onMounted(() => toFrom());

async function updatePost(title, body, tags) {
  loading.value = !loading.value;
  const postRef = doc(db, "posts", route.params.id);
  await updateDoc(postRef, {
    title,
    body,
    tags,
  });
  loading.value = !loading.value;
  router.push({ name: "home" });
}
</script>