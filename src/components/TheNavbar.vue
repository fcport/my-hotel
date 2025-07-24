<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'signup' }">Signup</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
nav {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>
