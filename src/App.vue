<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
