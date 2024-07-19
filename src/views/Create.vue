<template>
  <div>
    <Navbar />
    <PageHeader />

    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <form @submit.prevent="createPost(title, body, tag)">
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
                  <button class="btn btn-primary text-uppercase">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>

    <FooterVue />
  </div>
</template>

<script setup>
import { ref } from "vue";
import post from "../composable/post.js";
const { createPost, addTag, tags } = post();
import Navbar from "@/components/Navbar.vue";
import PageHeader from "@/components/PageHeader.vue";
import FooterVue from "@/components/FooterVue.vue";
const title = ref("");
const body = ref("");
const tag = ref("");

function status() {
  addTag(tag.value);
  tag.value = "";
}
</script>
