import type { Models } from 'appwrite'
import type { Room } from './room.model'
import type { ExtraService } from './extra-services.model'
import type { BarItem } from './bar-item.model'

export interface HotelData {
  name: string
  description?: string
  address?: string
  rooms?: Room[]
  extraServices?: ExtraService[]
  barItems?: BarItem[]
}

export interface Hotel extends HotelData {
  id: string
}

export interface HotelDocument extends HotelData, Models.Document {}
