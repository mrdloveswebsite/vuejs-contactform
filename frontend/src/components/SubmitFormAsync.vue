<script setup>
import { ref } from 'vue'
import ThankYouNotes from './ThankYouNotes.vue'
import { fakeSubmit } from '../api.js'
 
const name = ref('')
const submitted = ref(false) // show thank-you when true
const loading = ref(false)   // true while "fetching"
const error = ref('')        // error message, if any
 
async function handleSubmit() {
  error.value = ''
  loading.value = true
  try {
    await fakeSubmit({ name: name.value }) // wait for the "server"
    submitted.value = true
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false // runs on success AND on error
  }
}
</script>
 
<template>
  <ThankYouNotes v-if="submitted" :name="name" />
 
  <form v-else class="space-y-3" @submit.prevent="handleSubmit">
    <input
      v-model="name"
      type="text"
      placeholder="Your name"
      class="w-full rounded border px-3 py-2"
      :disabled="loading"
    />
 
    <button
      type="submit"
      class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      :disabled="loading || !name"
    >
      {{ loading ? 'Submitting…' : 'Submit' }}
    </button>
 
    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
  </form>
</template>