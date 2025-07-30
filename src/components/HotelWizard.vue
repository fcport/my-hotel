<script setup lang="ts">
// const ite
</script>

<template>
  <section class="hotel_wizard_container">
    <h2>Hotel Creation Wizard</h2>
    <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:[`item.1`]>
        <v-card title="Hotel Informations" flat>...</v-card>
      </template>

      <template v-slot:[`item.2`]>
        <v-card title="Rooms Informations" flat>...</v-card>
      </template>

      <template v-slot:[`item.3`]>
        <v-card title="Services and bar items" flat>...</v-card>
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
