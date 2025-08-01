<template>
  <div>
    <div v-for="hotel in hotelStore.hotels" :key="hotel.id">{{ hotel.name }}</div>
    <v-btn @click="test">Test</v-btn>
    <v-btn @click="testHotel">Test Hotel</v-btn>
  </div>
</template>

<script setup lang="ts">
import { databases, hotelCollectionId, todoCollectionId } from '@/lib/appwrite'
import { useHotelStore } from '@/store/hotel.store'
import { ID } from 'appwrite'
import { onMounted } from 'vue'

const hotelStore = useHotelStore()
onMounted(async () => {
  await hotelStore.getHotels()
})

async function test() {
  const res = await databases.createDocument(
    '687bbcbe000afa4a5417',
    todoCollectionId,
    ID.unique(),
    { text: 'test from hotel', category: 'work', status: 'pending' },
  )
  console.log(res)
}
async function testHotel() {
  const res = await databases.createDocument(
    '687bbcbe000afa4a5417',
    hotelCollectionId,
    ID.unique(),
    { name: 'test from home' },
  )
  console.log(res)
}
</script>

<style></style>
