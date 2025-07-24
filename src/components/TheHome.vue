<template>
  <div><button @click="ping">ping</button></div>
</template>

<script setup lang="ts">
import { databaseId, databases, todoCollectionId } from '@/lib/appwrite'
import { ID } from 'appwrite'

async function ping() {
  const res = await databases.createDocument(databaseId, todoCollectionId, ID.unique(), {
    text: 'Test from another app',
    status: 'pending',
    category: 'work',
  })

  console.log(res)
}
</script>

<style></style>
