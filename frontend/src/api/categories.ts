
import { http } from './http'

export interface Category {
  id: number
  name: string
  description: string
}

export function getCategories(): Promise<Category[]> {
  return http.get<Category[]>('/categories')
}

export function getCategoryById(id: number): Promise<Category> {
  return http.get<Category>(`/categories/${id}`)
}
