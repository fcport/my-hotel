import { databaseId, databases, hotelCollectionId, roomCollectionId } from '@/lib/appwrite'
import type { Hotel } from '@/models/hotel.model'
import type { Room } from '@/models/room.model'
import { ID, Query } from 'appwrite'

export async function createHotel(hotel: Partial<Hotel>) {
  const res = await databases.createDocument(databaseId, hotelCollectionId, ID.unique(), hotel)

  console.log(res)

  return { ...res, id: res.$id }
}

export async function getAllHotels() {
  const res = (
    await databases.listDocuments(databaseId, hotelCollectionId, [Query.select(['*', 'rooms.*'])])
  ).documents
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

export async function saveHotelRooms(hotelId: string, rooms: Room[]) {
  const roomsToSave = [
    ...rooms.map((room) => ({
      name: room.name,
      allocation: room.allocation,
      hotels: hotelId,
    })),
  ]
  console.log('>>>>', roomsToSave)
  const res = [] as Room[]
  roomsToSave.forEach(async (room) => {
    const resultSingleRoom = await databases.createDocument(
      databaseId,
      roomCollectionId,
      ID.unique(),
      room,
    )
    res.push(resultSingleRoom as unknown as Room)
  })

  console.log(res)

  return res
}
