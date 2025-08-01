<script setup lang="ts">
import { useHotelStore } from '@/store/hotel.store'
import { ref } from 'vue'

const hotelStore = useHotelStore()

const hotelName = ref('')
const hotelDescription = ref('')

async function saveHotel() {
  const res = await hotelStore.saveNewHotel({
    name: hotelName.value,
    description: hotelDescription.value,
  })

  console.log(res)
}
</script>

<template>
  <section class="hotel_wizard_container">
    <h2>Hotel Creation Wizard</h2>
    <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:[`item.1`]>
        <v-card title="Hotel informations" flat
          ><v-form @submit.prevent @submit="saveHotel()">
            <v-text-field type="text" label="Hotel name" v-model="hotelName" required>
            </v-text-field>
            <v-text-field type="text" label="Hotel description" v-model="hotelDescription">
            </v-text-field>
            <v-btn type="submit">Save</v-btn>
          </v-form></v-card
        >
      </template>

      <template v-slot:[`item.2`]>
        <v-card title="Rooms informations" flat>...</v-card>
      </template>

      <template v-slot:[`item.3`]>
        <v-card title="Services and extras" flat>...</v-card>
      </template>
    </v-stepper>
  </section>
</template>

<style lang="scss">
.hotel_wizard_container {
  display: flex;
  flex-direction: column;
}
</style>
