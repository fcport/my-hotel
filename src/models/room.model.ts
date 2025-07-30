import type { Hotel } from './hotel.model'

export interface Room {
  id: string
  description?: string
  allocation: number
  hotels: Hotel
}
