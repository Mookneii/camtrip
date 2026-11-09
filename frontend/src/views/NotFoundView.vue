
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <RouterLink to="/">Return to Home</RouterLink>
  </main>
</template>

<style scoped>
main {
  padding: 40px;
  text-align: center;
}
</style>
