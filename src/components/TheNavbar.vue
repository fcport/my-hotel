<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'signup' }">Signup</RouterLink>
    <RouterLink :to="{ name: 'logout' }">Logout</RouterLink>
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
