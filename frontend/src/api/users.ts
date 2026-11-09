
import { http } from './http'

export interface User {
  id: number
  name: string
  email: string
  passwordHash: string
  role: 'TRAVELER' | 'ADMIN'
  createdAt: string
}

export function getUsers(): Promise<User[]> {
  return http.get<User[]>('/users')
}

export function getUserById(id: number): Promise<User> {
  return http.get<User>(`/users/${id}`)
}
