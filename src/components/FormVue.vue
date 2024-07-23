<template>
  <div>
    <form @submit.prevent="createPost(title, body, tag)" @submit="btn = !btn">
      <div class="form-floating">
        <input
          class="form-control"
          id="title"
          type="text"
          v-model="titleForm"
          autofocus
        />
        <label for="title">Title</label>
      </div>

      <div class="form-floating">
        <textarea
          class="form-control"
          id="body"
          style="height: 12rem"
          v-model="bodyForm"
        ></textarea>
        <label for="body">Body</label>
      </div>

      <div class="form-floating">
        <textarea
          class="form-control"
          id="tag"
          style="height: 12rem"
          @keydown.enter.prevent="status()"
          v-model="tagForm"
        ></textarea>
        <label for="tag">Tag</label>
        <span v-for="tag in tagsForm" :key="tag" class="post-meta mx-1">
          #{{ tag }}
        </span>
      </div>
      <br />

      <div class="d-flex justify-content-center">
        <button class="btn btn-primary text-uppercase" :disabled="btn">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";
const props = defineProps(["title", "body"]);
const emit = defineEmits(["createPost", "editPost"]);

const btn = ref(false);

const titleForm = ref("");
const bodyForm = ref("");
const tagForm = ref("");
const tagsForm = ref([]);

watchEffect(() => {
  titleForm.value = props?.title || "";
  bodyForm.value = props?.body || "";
});

function status() {
  if (!tagForm.value) return;
  if (tagForm.value) {
    tagForm.value = tagForm.value.toLowerCase().replace(/\s+/g, "");
    if (tagsForm.value.includes(tagForm.value)) return (tagForm.value = "");
    else {
      tagsForm.value.push(tagForm.value);
      return (tagForm.value = "");
    }
  }
}

import { useRoute } from "vue-router";
const route = useRoute();

function conditionTag() {
  const changeTag = tagForm.value.toLowerCase().replace(/\s+/g, "");
  tagForm.value = changeTag;
  tagsForm.value.push(changeTag);
}

function createPost() {
  if (route.params.id) {
    //
    if (tagForm.value) {
      conditionTag();
      emit("editPost", titleForm.value, bodyForm.value, tagsForm.value);
      return (btn.value = !btn.value);
    } else {
      emit("editPost", titleForm.value, bodyForm.value, tagsForm.value);
      return (btn.value = !btn.value);
    }
    //
  } else {
    if (tagForm.value) {
      conditionTag();
      emit("createPost", titleForm.value, bodyForm.value, tagsForm.value);
      return (btn.valuelue = !btn.value);
    } else {
      if (tagsForm.value.length < 1) {
        alert("Please add at least one tag");
      } else {
        emit("createPost", titleForm.value, bodyForm.value, tagsForm.value);
      }
    }
  }
}
</script>