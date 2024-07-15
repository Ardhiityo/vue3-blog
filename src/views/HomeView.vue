<template>
  <div>
    <input type="text" v-model="search" /> <br />
    <div v-for="(name, index) in searchPerson" :key="index">
      {{ name }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
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
</script>

<style scoped>
</style>