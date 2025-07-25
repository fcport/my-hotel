import type { SnackbarMessage } from '@/models/snackbar-message.model'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSnackbarStore = defineStore('snackbar', () => {
  const queue = ref([] as SnackbarMessage[])
  function addMessage(msg: Partial<SnackbarMessage>) {
    queue.value.push({
      text: msg.text || '',
      color: msg.color,
      timeout: msg.timeout || 2000,
    })
  }

  return { queue, addMessage }
})
