<template>
  <div>
    <input type="text" v-model="search" /> <br />
    <div v-for="(name, index) in searchPerson" :key="index">
      {{ name }}
    </div>
    <button @click="stopAll">Stop</button>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from "vue";
const search = ref("");
const person = ref([
  "andrew",
  "john",
  "jane",
  "jessica",
  "james",
  "jack",
  "jennifer",
]);

const searchPerson = computed(() => {
  return person.value.filter((name) => name.includes(search.value));
});

const watchOne = watch(search, () => {
  console.log("watch berjalan");
});

// Watch effect akan dijalankan pertama kali, dan akan mentrigger jika ada value yg dipantau berubah
const watchEffectOne = watchEffect(() => {
  console.log("watch effect berjalan", search.value);
});

// Untuk menghentikan watch dan watch effect
function stopAll() {
  watchOne();
  watchEffectOne();
}
</script>

<style scoped>
</style>