
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getPlaceById } from '../api/places'
import type { Destination } from '../types'

const route = useRoute()

const place = ref<Destination | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

async function fetchPlace() {
  loading.value = true
  error.value = null

  try {
    const id = Number(route.params.id)

    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('Invalid destination ID.')
    }

    place.value = await getPlaceById(id)
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Failed to load destination.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchPlace)
</script>

<template>
  <main>
    <RouterLink to="/">← Back to destinations</RouterLink>

    <p v-if="loading">Loading destination...</p>

    <p v-else-if="error">{{ error }}</p>

    <section v-else-if="place">
      <h1>{{ place.name }}</h1>

      <img
        :src="place.imageUrl"
        :alt="place.name"
        class="place-image"
      />

      <p>{{ place.description }}</p>
      <p><strong>Province:</strong> {{ place.province }}</p>
      <p><strong>Estimated cost:</strong> ${{ place.estimatedCost }}</p>
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 24px;
}

.place-image {
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  border-radius: 12px;
  object-fit: cover;
}
</style>
