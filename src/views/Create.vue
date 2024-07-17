<template>
  <div>
    <form @submit.prevent="createPost(title, body, tag)">
      <label for="title">Title</label>
      <br />
      <input type="text" id="title" v-model="title" />
      <br />

      <label for="body">Body</label>
      <br />
      <input type="text" id="body" v-model="body" />
      <br />

      <label for="tag">Tag</label>
      <br />
      <input
        type="text"
        id="tag"
        v-model="tag"
        @keydown.enter.prevent="status()"
      />
      <br />

      <button>Create</button>

      <div v-for="tag in tags" :key="tag">
        {{ tag }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import post from "../composable/post.js";
const { createPost, addTag, tags } = post();
const title = ref("");
const body = ref("");
const tag = ref("");

function status () {
    addTag(tag.value);
    tag.value = "";
}

</script>
