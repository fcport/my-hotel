import { account } from '@/lib/appwrite'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)

  async function checkLoginStatus() {
    try {
      const res = await account.get()
      if (res) {
        isLoggedIn.value = true
        return true
      } else {
        isLoggedIn.value = false
        return false
      }
    } catch (error) {
      console.log(error)
      isLoggedIn.value = false
      return false
    }
  }

  return { isLoggedIn, checkLoginStatus }
})
