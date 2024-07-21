<template>
  <div>
    <Navbar />
    <RouterView/>
    <FooterVue />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import FooterVue from "@/components/FooterVue.vue";
</script>

