import { createHotel, getAllHotels } from '@/composables/hotel'
import type { Hotel } from '@/models/hotel.model'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSnackbarStore } from './snackbar.store'

// const snackbarStore = useSnackbarStore()
export const useHotelStore = defineStore('hotel', () => {
  const hotels = ref([] as Hotel[])
  const snackbarStore = useSnackbarStore()
  const selectedHotel = ref<Hotel | null>(null)
  async function saveNewHotel(hotel: Partial<Hotel>) {
    try {
      debugger
      const res = await createHotel(hotel)
      console.log(res)
      await getHotels()
      if (!!hotels.value.find((hotel) => hotel.id === res.$id)) {
        selectedHotel.value = hotels.value.find((hotel) => hotel.id === res.$id) as Hotel
      }
    } catch (error) {
      console.log(error)
      snackbarStore.addMessage({ color: 'error', text: `There was an error: ${error}` })
    }
  }

  async function getHotels() {
    try {
      const res = await getAllHotels()
      console.log(res)
      hotels.value = res as Hotel[]
    } catch (error) {
      console.log(error)
      snackbarStore.addMessage({ color: 'error', text: `There was an error: ${error}` })
    }
  }

  function selectHotel(hotelId: string) {
    if (hotels.value.findIndex((hotel) => hotel.id === hotelId)) {
      selectedHotel.value = hotels.value.find((hotel) => hotel.id === hotelId)!
    }
  }

  async function getRoomsForHotel(hotelId: string) {}

  async function saveRoomsForHotel(hotelId: string) {}

  return {
    hotels,
    saveNewHotel,
    getHotels,
    selectedHotel,
    selectHotel,
    getRoomsForHotel,
    saveRoomsForHotel,
  }
})
