<template>
  <div>
    <h1>Hello {{ personOne }}</h1>
    <button @click="changeOne">Change</button>
    <h1>Hello {{ personTwo }}</h1>
    <button @click="changeTwo">Change</button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const personOne = ref("Andi");

function changeOne() {
  personOne.value = "Budi";
}

// Reactive hanya akan bekerja pada data object / array
const personTwo = reactive("Putri");

function changeTwo() {
  personTwo = "Dwi";
}
</script>

<style scoped>
</style>