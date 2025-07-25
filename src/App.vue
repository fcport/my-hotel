<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import { useSnackbarStore } from './store/snackbar.store'

const snackbarStore = useSnackbarStore()
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <main>
    <RouterView />
    <VSnackbarQueue v-model="snackbarStore.queue" />
  </main>
  <footer></footer>
</template>

<style scoped></style>
