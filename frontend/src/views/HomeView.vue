

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import DestinationCard from '../components/DestinationCard.vue'
import { usePlacesStore } from '../stores/places'

const placesStore = usePlacesStore()
const search = ref('')

onMounted(() => {
  placesStore.fetchPlaces()
})

const visible = computed(() => {
  const keyword = search.value.toLowerCase()

  return placesStore.places.filter(
    (place) =>
      place.name.toLowerCase().includes(keyword) ||
      place.province.toLowerCase().includes(keyword),
  )
})

import { useRouter } from 'vue-router'

const router = useRouter()

function onSelect(id: number) {
  router.push(`/places/${id}`)
}
</script>

<template>
  <main>
    <h1>Explore Cambodia with CamTrip</h1>
    <p>Discover beautiful places for your next trip.</p>

    <input
      v-model="search"
      placeholder="Search destinations..."
    />

    <!-- Loading state -->
    <p v-if="placesStore.loading">
      Loading destinations...
    </p>

    <!-- Error state -->
    <div v-else-if="placesStore.error">
      <p>{{ placesStore.error }}</p>
      <button @click="placesStore.fetchPlaces()">
        Try Again
      </button>
    </div>

    <!-- Empty state -->
    <p v-else-if="placesStore.loaded && placesStore.places.length === 0">
      No destinations available yet.
    </p>

    <!-- Success state -->
    <template v-else-if="placesStore.loaded">
      <div v-if="visible.length > 0" class="grid">
        <DestinationCard
          v-for="place in visible"
          :key="place.id"
          :destination="place"
          @select="onSelect"
        />
      </div>

      <p v-else>
        No destinations match your search.
      </p>
    </template>
  </main>
</template>

<style scoped>
main {
  padding: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

input {
  padding: 10px;
  width: 100%;
  max-width: 400px;
  margin-top: 16px;
}
</style>

