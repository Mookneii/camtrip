
import { http } from './http'

export interface Trip {
  id: number
  userId: number
  title: string
  startDate: string
  endDate: string
  budget: number
  createdAt: string
}

export function getTrips(): Promise<Trip[]> {
  return http.get<Trip[]>('/trips')
}

export function getTripById(id: number): Promise<Trip> {
  return http.get<Trip>(`/trips/${id}`)
}

export function createTrip(data: Omit<Trip, 'id'>): Promise<Trip> {
  return http.post<Trip>('/trips', data)
}
