
<script setup lang="ts">
import { ref, computed } from "vue";
import DestinationCard from "../components/DestinationCard.vue";
import { destinations } from "../data/destinations";

const search = ref("");

const visible = computed(() =>
  destinations.filter((d) =>
    d.name.toLowerCase().includes(search.value.toLowerCase()) ||
    d.province.toLowerCase().includes(search.value.toLowerCase())
  )
);

function onSelect(id: number) {
  alert(`Selected destination ID: ${id}`);
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

    <div class="grid">
      <DestinationCard
        v-for="destination in visible"
        :key="destination.id"
        :destination="destination"
        @select="onSelect"
      />
    </div>

    <p v-if="visible.length === 0">
      No destinations found.
    </p>
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
</style>
