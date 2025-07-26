<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'signup' }">Signup</RouterLink>
    <v-btn @click="emits('logout')" variant="outlined" icon="mdi-logout"></v-btn>
  </nav>
</template>

<script setup lang="ts">
const emits = defineEmits(['logout'])
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
