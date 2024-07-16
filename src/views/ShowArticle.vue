<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="err">
        {{ err }}
      </div>
      <div v-else>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import getPost from "@/composable/getPost";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { post, err, load, loading } = getPost(route.params.id);
onMounted(() => load());
</script>