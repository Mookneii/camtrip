
<script setup lang="ts">
import type { Destination } from "../types";

defineProps<{
  destination: Destination;
}>();

const emit = defineEmits<{
  (e: "select", id: number): void;
}>();
</script>

<template>
  <article class="card">
    <img
      :src="destination.image"
      :alt="destination.name"
    />

    <h2>{{ destination.name }}</h2>
    <p>{{ destination.province }}</p>
    <p>{{ destination.description }}</p>

    <p>
      Estimated cost: ${{ destination.estimatedCost }}
    </p>

    <button @click="emit('select', destination.id)">
      View Details
    </button>
  </article>
</template>

<style scoped>
.card {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
}
img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
</style>
