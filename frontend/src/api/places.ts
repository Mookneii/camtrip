
import { http } from './http'
import type { Destination } from '../types'

export function getPlaces(): Promise<Destination[]> {
  return http.get<Destination[]>('/places')
}

export function getPlaceById(id: number): Promise<Destination> {
  return http.get<Destination>(`/places/${id}`)
}

export function createPlace(data: Omit<Destination, 'id'>): Promise<Destination> {
  return http.post<Destination>('/places', data)
}
