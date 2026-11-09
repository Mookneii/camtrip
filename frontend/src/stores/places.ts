
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPlaces } from '../api/places'
import type { Destination } from '../types'

export const usePlacesStore = defineStore('places', () => {
  const places = ref<Destination[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const loaded = ref(false)

  async function fetchPlaces() {
    loading.value = true
    error.value = null

    try {
      places.value = await getPlaces()
      loaded.value = true
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to load places.'
      loaded.value = false
    } finally {
      loading.value = false
    }
  }

  return {
    places,
    loading,
    error,
    loaded,
    fetchPlaces,
  }
})
