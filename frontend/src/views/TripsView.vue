<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTrips } from '../api/trips'
import type { Trip } from '../api/trips'
import { RouterLink } from 'vue-router'

const trips = ref<Trip[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    trips.value = await getTrips()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load trips.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <h1>My Trips</h1>
    <RouterLink to="/trips/new"> + Create New Trip </RouterLink>

    <p v-if="loading">Loading trips...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="trips.length === 0">You have no trips yet.</p>

    <ul v-else>
      <li v-for="trip in trips" :key="trip.id">
        <h3>{{ trip.title }}</h3>
        <p>{{ trip.startDate }} to {{ trip.endDate }}</p>
        <p>Budget: ${{ trip.budget }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  padding: 24px;
}
</style>
