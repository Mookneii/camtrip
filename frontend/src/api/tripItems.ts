
import { http } from './http'

export interface TripItem {
  id: number
  tripId: number
  placeId: number
  visitDate: string
  visitOrder: number
  estimatedCost: number
  notes: string
}

export function getTripItems(): Promise<TripItem[]> {
  return http.get<TripItem[]>('/tripItems')
}

export function getTripItemsByTripId(tripId: number): Promise<TripItem[]> {
  return http.get<TripItem[]>(`/tripItems?tripId=${tripId}`)
}

export function createTripItem(
  data: Omit<TripItem, 'id'>,
): Promise<TripItem> {
  return http.post<TripItem>('/tripItems', data)
}
