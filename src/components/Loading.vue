<template>
  <div></div>
</template>

<style scoped>
div {
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: black;
  border-bottom-color: black;
  animation: spinner 500ms ease infinite;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>