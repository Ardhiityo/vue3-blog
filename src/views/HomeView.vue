<template>
  <div>
    <h1 ref="heading">{{ say }} {{ num }}</h1>
    <input type="text" v-model="say" />
    <button @click="getEl">Click!</button>
    <button @click="num++">Incre!</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const heading = ref(null);
// console.log(heading.value);

const say = ref("Hello World");
const num = ref("123");

const getEl = () => {
  // console.log(heading.value.classList.add("Heading"));
  console.log(heading.value);
  heading.value.innerText = "Hello Bro";
  console.log(heading.value);
};
</script>

<style scoped>
</style>