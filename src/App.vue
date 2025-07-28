<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import { useAuthStore } from './store/auth.store'
import { useSnackbarStore } from './store/snackbar.store'

const snackbarStore = useSnackbarStore()
const authStore = useAuthStore()
async function logout() {
  await authStore.logout()
  snackbarStore.queue.push({
    text: 'Bye bye!',
  })
}
</script>

<template>
  <header>
    <TheNavbar @logout="logout" />
  </header>
  <main>
    <RouterView />
    <VSnackbarQueue v-model="snackbarStore.queue" />
  </main>
  <footer></footer>
</template>

<style scoped></style>
