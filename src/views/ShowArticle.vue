<template>
  <div>
    <Navbar />
    <PageHeader :image="image" />
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
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

            <div class="d-flex flex-wrap gap-2">
              <div v-for="tag in post.tags" :key="tag">
                <p>{{ tag }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import getPost from "@/composable/getPost";
import Navbar from "@/components/Navbar.vue";
import PageHeader from "@/components/PageHeader.vue";
import FooterVue from "@/components/FooterVue.vue";
import { onMounted, defineProps } from "vue";
const { image } = defineProps(["image"]);
import { useRoute } from "vue-router";
const route = useRoute();
const { post, err, load, loading } = getPost(route.params.id);
onMounted(() => load());
</script>