import type { Hotel } from './hotel.model'

export interface Room {
  id: string
  name: string
  description?: string
  allocation: number
  hotel: Hotel
}
