
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { createTrip } from '../api/trips'

const router = useRouter()

const form = reactive({
  title: '',
  startDate: '',
  endDate: '',
  budget: '',
})

const errors = reactive({
  title: '',
  startDate: '',
  endDate: '',
  budget: '',
})

const loading = ref(false)
const apiError = ref('')

function validateForm(): boolean {
  errors.title = ''
  errors.startDate = ''
  errors.endDate = ''
  errors.budget = ''

  let valid = true

  if (!form.title.trim()) {
    errors.title = 'Trip title is required.'
    valid = false
  }

  if (!form.startDate) {
    errors.startDate = 'Start date is required.'
    valid = false
  }

  if (!form.endDate) {
    errors.endDate = 'End date is required.'
    valid = false
  }

  if (form.startDate && form.endDate && form.endDate < form.startDate) {
    errors.endDate = 'End date must be after or equal to start date.'
    valid = false
  }

  const budget = Number(form.budget)

  if (!form.budget.trim() || !Number.isFinite(budget) || budget <= 0) {
    errors.budget = 'Budget must be greater than zero.'
    valid = false
  }

  return valid
}

async function submitForm() {
  apiError.value = ''

  if (!validateForm()) {
    return
  }

  loading.value = true

  try {
    await createTrip({
      userId: 1,
      title: form.title.trim(),
      startDate: form.startDate,
      endDate: form.endDate,
      budget: Number(form.budget),
      createdAt: new Date().toISOString(),
    })

    await router.push('/trips')
  } catch (err) {
    apiError.value =
      err instanceof Error ? err.message : 'Could not create trip.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="form-container">
    <RouterLink to="/trips">← Back to My Trips</RouterLink>

    <h1>Create a New Trip</h1>
    <p>Enter your trip details and set your travel budget.</p>

    <form @submit.prevent="submitForm">
      <div class="field">
        <label for="title">Trip title</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="e.g. Kampot Weekend Trip"
        />
        <small v-if="errors.title" class="error">
          {{ errors.title }}
        </small>
      </div>

      <div class="field">
        <label for="startDate">Start date</label>
        <input
          id="startDate"
          v-model="form.startDate"
          type="date"
        />
        <small v-if="errors.startDate" class="error">
          {{ errors.startDate }}
        </small>
      </div>

      <div class="field">
        <label for="endDate">End date</label>
        <input
          id="endDate"
          v-model="form.endDate"
          type="date"
        />
        <small v-if="errors.endDate" class="error">
          {{ errors.endDate }}
        </small>
      </div>

      <div class="field">
        <label for="budget">Budget (USD)</label>
        <input
          id="budget"
          v-model="form.budget"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="e.g. 150"
        />
        <small v-if="errors.budget" class="error">
          {{ errors.budget }}
        </small>
      </div>

      <p v-if="apiError" class="error">
        {{ apiError }}
      </p>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Creating...' : 'Create Trip' }}
      </button>
    </form>
  </main>
</template>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 30px auto;
  padding: 24px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.error {
  color: #d93025;
}

button {
  padding: 12px 20px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
