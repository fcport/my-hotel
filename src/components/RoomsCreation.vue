<template>
  <div class="rooms_creation_container">
    <h1>Creating rooms for: {{ hotelStore.selectedHotel?.name || 'unknown' }}</h1>
    <v-form @submit.prevent @submit="saveRooms">
      <div class="room-form" v-for="(room, index) in rooms" :key="room.id">
        <v-text-field type="text" label="Room number/name" v-model="rooms[index].name" required>
        </v-text-field>
        <v-number-input
          :reverse="false"
          controlVariant="default"
          label="Allocation"
          :hideInput="false"
          :inset="false"
          v-model="rooms[index].allocation"
        ></v-number-input>
      </div>
      <v-btn type="submit">Save</v-btn>
      <v-btn type="button" @click="addEmptyRoom">Add room</v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import type { Room } from '@/models/room.model'
import { useHotelStore } from '@/store/hotel.store'
import { ID } from 'appwrite'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const rooms = ref([] as Room[])

const hotelStore = useHotelStore()
const { selectedHotel } = storeToRefs(hotelStore)

async function saveRooms() {
  if (selectedHotel.value?.id) hotelStore.saveRoomsForHotel(selectedHotel.value?.id, rooms.value)
}

function addEmptyRoom() {
  rooms.value.push({ allocation: 0, id: ID.unique(), hotel: hotelStore.hotels[0], name: '' })
}
</script>

<style lang="scss">
.rooms_creation_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.room-form {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
