import { databaseId, databases, hotelCollectionId } from '@/lib/appwrite'
import type { Hotel } from '@/models/hotel.model'
import { ID } from 'appwrite'

export async function createHotel(hotel: Partial<Hotel>) {
  const res = await databases.createDocument(databaseId, hotelCollectionId, ID.unique(), hotel)

  console.log(res)

  return res
}
