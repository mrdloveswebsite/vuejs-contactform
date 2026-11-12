<script setup>
import { ref } from 'vue'
import ThankYouNotes from './ThankYouNotes.vue'
 
const name = ref('')
const submitted = ref(false) // false = show form, true = show thank-you
 
function handleSubmit() {
  // Later you could save to Firebase here before flipping the flag
  submitted.value = true
}
</script>
 
<template>
  <!-- v-if / v-else: only ONE of these is on the page at a time -->
  <ThankYouNotes v-if="submitted" :name="name" />
 
  <form v-else class="space-y-3" @submit.prevent="handleSubmit">
    <input
      v-model="name"
      type="text"
      placeholder="Your name"
      class="w-full rounded border px-3 py-2"
    />
    <button
      type="submit"
      class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Submit
    </button>
  </form>
</template>
 