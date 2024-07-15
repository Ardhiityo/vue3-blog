<template>
  <div>
    <h1>Home</h1>
    <PostList v-if="showArticle" :posts="article" />
    <button @click="showArticle = !showArticle">Show Article</button>
    <button @click="article.pop()">Delete</button>
  </div>
</template>

<script setup>
import PostList from "../components/PostList.vue";
import { ref, onMounted, onUnmounted, onUpdated } from "vue";
const showArticle = ref(true);

const article = ref([
  {
    title: "Article 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim rerum explicabo, nostrum maiores ab voluptatem sit soluta quasi! Dolorem maiores voluptate repellat cupiditate consequuntur provident obcaecati esse, facilis ipsa?",
  },
  {
    title: "Article 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim rerum explicabo, nostrum maiores ab voluptatem sit soluta quasi! Dolorem maiores voluptate repellat cupiditate consequuntur provident obcaecati esse, facilis ipsa?",
  },
  {
    title: "Article 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim rerum explicabo, nostrum maiores ab voluptatem sit soluta quasi! Dolorem maiores voluptate repellat cupiditate consequuntur provident obcaecati esse, facilis ipsa?",
  },
]);
// onMounted(() => console.log("Mounted"));
// onUnmounted(() => console.log("Unmounted"));
// onUpdated(() => console.log("Update"));
</script>
