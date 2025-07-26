<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'login' }" v-if="!isLoggedIn">Login</RouterLink>
    <RouterLink :to="{ name: 'signup' }" v-if="!isLoggedIn">Signup</RouterLink>
    <v-btn @click="emits('logout')" variant="outlined" icon="mdi-logout" v-if="isLoggedIn"></v-btn>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const emits = defineEmits(['logout'])
const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)

onMounted(async () => {
  await authStore.checkLoginStatus()
})
</script>

<style lang="scss">
nav {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  padding: 10px 0;
}
</style>
