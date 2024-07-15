<template>
  <div>
    <PostList :posts="article" />
  </div>
</template>

<script setup>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

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
</script>
