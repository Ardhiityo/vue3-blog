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
                <form
                  @submit.prevent="createPost(title, body, tag)"
                  @submit="btn = !btn"
                >
                  <div class="form-floating">
                    <input
                      class="form-control"
                      id="title"
                      type="text"
                      v-model="title"
                      placeholder="Enter your title..."
                    />
                    <label for="title">Title</label>
                  </div>

                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      id="body"
                      placeholder="Enter your body here..."
                      style="height: 12rem"
                      v-model="body"
                    ></textarea>
                    <label for="body">Body</label>
                  </div>

                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      id="tag"
                      placeholder="Enter your tag here..."
                      style="height: 12rem"
                      @keydown.enter.prevent="status()"
                      v-model="tag"
                    ></textarea>
                    <label for="tag">Tag</label>
                    <span v-for="tag in tags" :key="tag" class="post-meta mx-1">
                      {{ tag }}
                    </span>
                  </div>
                  <br />

                  <div class="d-flex justify-content-center">
                    <button
                      class="btn btn-primary text-uppercase"
                      :disabled="btn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
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
import post from "../composable/post.js";
const { createPost, addTag, tags } = post();
const title = ref("");
const body = ref("");
const tag = ref("");
import Loading from "@/components/Loading.vue";
const btn = ref(false);

function status() {
  addTag(tag.value);
  tag.value = "";
}
</script>
