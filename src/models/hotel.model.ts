import type { Room } from './room.model'

export interface Hotel {
  id: string
  name: string
  description?: string
  rooms: Room[]
}
