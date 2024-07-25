<template>
  <div>
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Simple Blog Made With Love</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div v-if="loading">
            <Loading />
          </div>

          <div v-else>
            <div v-if="error">
              <div class="post-preview text-center">
                <h3 class="post-subtitle">{{ error }}</h3>
              </div>
              <hr class="my-4" />
            </div>
            <div v-else>
              <div class="input-group mb-5">
                <span class="input-group-text" id="basic-addon1">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </span>
                <input
                  type="text"
                  class="form-control rounded-1"
                  placeholder="search by post titles..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  v-model="search"
                  autofocus
                />
              </div>
              <PostList :posts="searchPosts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Loading from "@/components/Loading.vue";
import PostList from "../components/post/PostList.vue";
import { getPosts } from "@/composable/getPosts";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const loading = ref(true);
const { err, load } = getPosts();

const posts = ref([]);
const error = ref(null);
const search = ref("");

const searchPosts = computed(() => {
  return posts.value.filter((post) =>
    post.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

function getData() {
  load()
    .then((res) => {
      if (res.length) {
        posts.value = res;
      } else {
        throw new Error("Let's add post now...");
      }
    })
    .catch((e) => (error.value = e.message || err))
    .finally(() => (loading.value = false));
}
getData();
</script>