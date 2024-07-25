<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
      <RouterLink class="navbar-brand fs-3" :to="{ name: 'home' }">
        <span class="fw-bold" style="color: #102c57">Clean</span>
        <span class="fst-italic fw-bolder" style="color: #007189">Blog<font-awesome-icon icon="fa-solid fa-feather" class="fa-sm" />
        </span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div
        ref="getElement"
        class="collapse navbar-collapse"
        id="navbarResponsive"
      >
        <ul class="navbar-nav ms-auto py-4 py-lg-0" @click="changeClass()">
          <li class="nav-item">
            <RouterLink
              class="nav-link px-lg-3 py-3 py-lg-4"
              :to="{ name: 'home' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link px-lg-3 py-3 py-lg-4"
              to="/article/create"
              >Create Post</RouterLink
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-lg-3 py-3 py-lg-4"
              href="mailto:aryaadi229@gmail.com"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const getElement = ref();
function changeClass() {
  getElement.value.classList = "collapse navbar-collapse";
}
</script>