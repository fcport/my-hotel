<script setup lang="ts">
import { useHotelStore } from '@/store/hotel.store'
import { ref, computed } from 'vue'
import RoomsCreation from './RoomsCreation.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const hotelStore = useHotelStore()

const savedHotel = ref(false)
const hotelName = ref('')
const hotelDescription = ref('')

const { hotels } = storeToRefs(hotelStore)
const hotelsList = computed(() => hotels.value.map((hotel) => ({ name: hotel.name, id: hotel.id })))
const selctedHotel = ref<{ name: string; id: string } | null>(null)

async function saveHotel() {
  const res = await hotelStore.saveNewHotel({
    name: hotelName.value,
    description: hotelDescription.value,
  })

  savedHotel.value = true

  console.log(res)
}

function onSelect() {
  const selectedHotelFromState = selctedHotel.value
    ? hotels.value.find((hotel) => hotel.id === selctedHotel.value?.id)
    : null
  console.log('select change', hotels.value, selectedHotelFromState)
  if (selectedHotelFromState) {
    hotelStore.selectHotel(selectedHotelFromState.id)
  }
}

onMounted(async () => {
  await hotelStore.getHotels()
})
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
          </v-form>
          <h2>Or select an hotel</h2>
          <div>
            <v-select
              v-model="selctedHotel"
              :items="hotelsList"
              item-title="name"
              item-value="id"
              label="Select"
              persistent-hint
              return-object
              single-line
              @update:model-value="onSelect"
            ></v-select>
          </div>
        </v-card>
      </template>

      <template v-slot:[`item.2`]>
        <v-card title="Rooms informations" flat><RoomsCreation /> </v-card>
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
