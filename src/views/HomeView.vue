<template>
  <div>
    <h1 ref="heading">Hello World</h1>
    <button @click="getEl">Click!</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const heading = ref(null);
console.log(heading.value);

const getEl = () => {
  console.log(heading.value.classList.add("Heading"));
  console.log(heading.value);
  heading.value.textContent = "Hello Bro";
};
</script>

<style scoped>
</style>