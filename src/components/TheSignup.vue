<template>
  <section>
    <v-form @submit.prevent @submit="signup">
      <v-text-field type="Email" label="Email" v-model="email" required> </v-text-field>
      <v-text-field type="Password" label="Password" v-model="password" required> </v-text-field>
      <v-text-field
        type="Password"
        label="Confirm Password"
        :rules="passwordMatchRule"
        v-model="confirmPassword"
        required
      >
      </v-text-field>
      <v-btn type="submit" class="signup-button" :disabled="!formValid">Signup</v-btn></v-form
    >
  </section>
</template>

<script setup lang="ts">
import { account } from '@/lib/appwrite'
import { useSnackbarStore } from '@/store/snackbar.store'
import { ID } from 'appwrite'
import { computed } from 'vue'
import { ref } from 'vue'

const snackbarStore = useSnackbarStore()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const formValid = computed(() => {
  return passwordsMatch.value && password.value.length > 0 && email.value.length > 0
})
const passwordsMatch = computed(() => {
  return password.value === confirmPassword.value
})

const passwordMatchRule = [
  (v: string) => !!v || 'Password match is required',
  (v: string) => password.value === v || 'Passwords are not matching',
]

async function signup() {
  if (!formValid.value) {
    snackbarStore.addMessage({
      text: `Please fill the form correctly`,
      color: 'error',
    })
    return
  }
  try {
    const res = await account.create(ID.unique(), email.value, password.value)

    console.log(res)
    if (res.$id) {
      snackbarStore.addMessage({
        text: `Account created: ${res.email}`,
      })
    }
  } catch (error) {
    snackbarStore.addMessage({
      text: `There was an error: ${error}`,
      color: 'error',
    })
  }
}

// async function automaticallyLoginAfterSignup() {
//   const sessionResult = await account.createEmailPasswordSession(email.value, password.value)
//   console.log(sessionResult)
// }
</script>

<style lang="scss">
.signup-button {
  margin-top: 10px;
}
</style>
