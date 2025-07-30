<script setup lang="ts">
import { ref } from 'vue'

// const ite
const hotelName = ref('')
const hotelDescription = ref('')
</script>

<template>
  <section class="hotel_wizard_container">
    <h2>Hotel Creation Wizard</h2>
    <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:[`item.1`]>
        <v-card title="Hotel informations" flat
          ><v-form @submit.prevent>
            <v-text-field type="text" label="Hotel name" v-model="hotelName" required>
            </v-text-field>
            <v-text-field type="text" label="Hotel description" v-model="hotelDescription">
            </v-text-field></v-form
        ></v-card>
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
