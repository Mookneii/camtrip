<script setup lang="ts">

import { destinations } from './data/destinations';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <HomeView
    :destinations="destinations"
  />
</template>