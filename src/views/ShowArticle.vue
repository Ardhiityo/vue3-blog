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
                  <div v-if="btn">
                    <Loading />
                  </div>
                  <div v-else>
                    <h1>{{ post.title }}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="post-preview">
            <div v-if="loading">
              <Loading />
            </div>
            <div v-else>
              <div v-if="!errors">
                <div v-if="btn">
                  <Loading />
                </div>

                <div v-else>
                  <h3 class="post-subtitle display-6">{{ post.body }}</h3>
                  <div class="d-flex flex-wrap gap-2">
                    <span
                      class="post-meta mx-1"
                      v-for="tag in post.tags"
                      :key="tag"
                    >
                      <h6>
                        <RouterLink
                          :to="{ name: 'tag', params: { tags: tag } }"
                        >
                          #{{ tag }}
                        </RouterLink>
                      </h6>
                      <button
                        class="btn btn-danger btn-sm m-0"
                        @click="delData(), btn = !btn"
                        :disabled="btn"
                      >
                        Delete post
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-4" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { db } from "@/firebase/config.js";
import { doc, deleteDoc } from "firebase/firestore";
import Loading from "@/components/Loading.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPost } from "@/composable/getPost";
const route = useRoute();
const router = useRouter();
const loading = ref(true);
const { getId, err } = getPost();
const post = ref({});
const errors = ref(null);

const btn = ref(false);

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

async function delData() {
  try {
    const postRef = doc(db, "posts", route.params.id);
    await deleteDoc(postRef);
  } catch (error) {
    alert("Error menghapus dokumen: ", error);
  }
  return router.push({ name: "home" });
}
</script>