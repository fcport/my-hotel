<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import { account } from './lib/appwrite'
import { useSnackbarStore } from './store/snackbar.store'

const snackbarStore = useSnackbarStore()
async function logout() {
  await account.deleteSession('current')
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
