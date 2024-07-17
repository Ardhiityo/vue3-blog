<template>
  <div>
    <form action="" method="post">
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
        @keydown.enter.prevent="addTag"
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
const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([]);

function addTag() {
  tag.value = "#" + tag.value.toLowerCase().replace(/\s+/g, "");
  if (!tags.value.includes(tag.value)) {
    tags.value.push(tag.value);
  }
  tag.value = "";
}
</script>
