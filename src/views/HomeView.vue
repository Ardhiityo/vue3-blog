<template>
  <div class="container text-center">
    <h1>Homepage</h1>
    <p ref="para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sed
      dolores nostrum laudantium enim beatae nam quidem corporis veniam, saepe
      officia laboriosam quis porro numquam velit, voluptates eveniet! Fugit,
      magnam.
    </p>

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="err">{{ err }}</div>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from "vue";
import Loading from "@/components/Loading.vue";
import getPosts from "@/composable/getPosts";
import PostList from "../components/PostList.vue";
const { posts, err, load, loading } = getPosts();
const para = ref(null);
onMounted(() => {
  console.log(para.value.innerText);
  load();
});
</script>