import { databaseId, databases, hotelCollectionId } from '@/lib/appwrite'
import type { Hotel } from '@/models/hotel.model'
import { ID } from 'appwrite'

export async function createHotel(hotel: Partial<Hotel>) {
  const res = await databases.createDocument(databaseId, hotelCollectionId, ID.unique(), hotel)

  console.log(res)

  return { ...res, id: res.$id }
}

export async function getAllHotels() {
  const res = (await databases.listDocuments(databaseId, hotelCollectionId, [])).documents
  console.log(res)

  return res.map((hotelFromDb) => ({
    ...hotelFromDb,
    id: hotelFromDb.$id,
    name: hotelFromDb.name,
    description: hotelFromDb.description || '',
    rooms: hotelFromDb.rooms || [],
    address: hotelFromDb.address || '',
    extraServices: hotelFromDb.extraServices || [],
    barItems: hotelFromDb.barItems || [],
  }))
}
