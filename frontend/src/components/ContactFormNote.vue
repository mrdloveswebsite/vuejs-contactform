<script setup>
defineProps({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
})
</script>
 
<template>
  <div id="contact-simple-sent" class="mt-12 flex flex-col items-center rounded-3xl bg-neutral-100 p-8 text-center sm:p-10 dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800">
    <span class="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20">
      <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="m16 19 2 2 4-4" /></svg>
    </span>
    
    <h3 id="contact-simple-sent-title" tabIndex="-1" class="mt-6 text-xl font-semibold tracking-tight text-neutral-950 focus:outline-hidden dark:text-neutral-50">Message sent</h3>

    <p class="mt-2 max-w-sm text-sm text-pretty text-neutral-600 dark:text-neutral-400">Thanks, <span id="contact-simple-sent-name">{{ name ? `${name}` : '' }}</span>. We'll reply to <span id="contact-simple-sent-email" class="font-medium break-all text-neutral-950 dark:text-neutral-50">{{ email }}</span> within one business day.</p>

  </div>
</template>