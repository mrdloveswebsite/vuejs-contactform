<script setup>
defineProps({
  name: { type: String, default: '' },
})
</script>
 
<template>
  <div class="rounded-xl border border-green-300 bg-green-50 p-4 text-green-800">
    <p class="text-lg font-semibold">Thank you{{ name ? `, ${name}` : '' }}!</p>
    <p class="text-sm">We've received your submission.</p>
  </div>
</template>