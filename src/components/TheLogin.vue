<template>
  <section>
    <v-form @submit.prevent @submit="login">
      <v-text-field type="Email" label="Email" v-model="email" required> </v-text-field>
      <v-text-field type="Password" label="Password" v-model="password" required> </v-text-field>

      <v-btn type="submit" class="signup-button" :disabled="!formValid">Login</v-btn></v-form
    >
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth.store'
import { ref } from 'vue'
import { computed } from 'vue'
const formValid = computed(() => true)

const email = ref('')
const password = ref('')

const authStore = useAuthStore()

async function login() {
  await authStore.login(email.value, password.value)
}
</script>

<style lang="scss"></style>
