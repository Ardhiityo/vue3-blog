<template>
  <div>
    <Navbar />
    <RouterView :image="'img/home-bg.jpg'" />
    <FooterVue />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import FooterVue from "@/components/FooterVue.vue";
</script>

