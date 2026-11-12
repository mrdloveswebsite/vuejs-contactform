<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import ContactFormNote from './ContactFormNote.vue'
import { fakeSubmit } from '../api.js'

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false) // show thank-you when true
const loading = ref(false)   // true while "fetching"
const error = ref('')        // error message, if any
 
async function handleSubmit() {
  error.value = ''
  loading.value = true
  try {
    await fakeSubmit({ form: { ...form } })
    submitted.value = true
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false // runs on success AND on error
  }
}
</script>

<template>
  <section id="contact-simple" aria-labelledby="contact-simple-title" class="bg-white px-4 py-16 md:px-8 md:py-24 dark:bg-neutral-950">
    <div class="mx-auto max-w-xl">
      <div class="text-center">
        <p class="font-mono text-xs tracking-widest text-neutral-600 uppercase dark:text-neutral-400">Contact</p>
        <h2 id="contact-simple-title" class="mt-3 text-3xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-4xl dark:text-neutral-50">Send us a message</h2>
        <p class="mt-4 text-lg/7 text-pretty text-neutral-600 dark:text-neutral-400">Questions about Lumora, your plan or your account? A person on our team reads every message and replies within one business day.</p>
      </div>

      <ContactFormNote v-if="submitted" :name="form.name" :email="form.email" />
      <form v-else id="contact-simple-form" @submit.prevent="handleSubmit" class="mt-12 grid gap-y-5">
        <div>
          <label htmlFor="contact-simple-name" class="mb-1.5 block text-sm font-medium text-neutral-950 dark:text-neutral-50">Name</label>
          <input id="contact-simple-name" v-model="form.name" type="text" autoComplete="name" required placeholder="Daniel Widyanto" class="block h-10 w-full rounded-lg bg-neutral-100 px-3 text-sm text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-600 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 aria-[invalid=true]:outline-red-600 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:placeholder:text-neutral-400 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50 dark:aria-[invalid=true]:outline-red-500" />
          <p id="contact-simple-name-error" v-if="error" class="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-700 dark:text-red-400"><svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>Enter your name.</p>
        </div>
        <div>
          <label htmlFor="contact-simple-email" class="mb-1.5 block text-sm font-medium text-neutral-950 dark:text-neutral-50">Email</label>
          <input id="contact-simple-email" v-model="form.email" type="email" autoComplete="email" required placeholder="maya@lumora.com" class="block h-10 w-full rounded-lg bg-neutral-100 px-3 text-sm text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-600 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 aria-[invalid=true]:outline-red-600 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:placeholder:text-neutral-400 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50 dark:aria-[invalid=true]:outline-red-500" />
          <p id="contact-simple-email-error" v-if="error" class="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-700 dark:text-red-400"><svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>Enter an email like maya@lumora.com.</p>
        </div>
        <div>
          <label htmlFor="contact-simple-message" class="mb-1.5 block text-sm font-medium text-neutral-950 dark:text-neutral-50">Message</label>
          <textarea v-model="form.message" id="contact-simple-message" rows="5" maxLength="1000" required placeholder="Tell us what you're working on and how we can help." class="block w-full resize-y rounded-lg bg-neutral-100 px-3 py-2 text-sm/6 text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-600 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 aria-[invalid=true]:outline-red-600 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:placeholder:text-neutral-400 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50 dark:aria-[invalid=true]:outline-red-500" />
          <div class="mt-1.5 flex items-start justify-between gap-4 text-[13px]">
            <p id="contact-simple-message-error" v-if="error" class="flex min-w-0 items-center gap-1.5 text-red-700 dark:text-red-400"><svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>Tell us how we can help.</p>
            <p id="contact-simple-message-count" class="ml-auto shrink-0 text-neutral-600 tabular-nums dark:text-neutral-400">{{ 1000 - form.message.length }} characters left</p>
          </div>
        </div>
        <div class="pt-1">
          <button type="submit" id="contact-simple-submit" :disabled="loading" class="group inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50">
            <svg class="hidden size-4 animate-spin group-aria-busy:block motion-reduce:animate-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
            <span id="contact-simple-submit-label">{{ loading ? 'Sending…' : 'Send' }}</span>
          </button>
          <p class="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">Prefer email? Write to <a href="mailto:hello@lumora.com" class="rounded-sm font-medium text-zinc-950 underline decoration-zinc-950/30 underline-offset-4 transition-colors duration-150 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-zinc-50 dark:decoration-zinc-50/30 dark:focus-visible:outline-zinc-50">hello@lumora.com</a></p>
        </div>
      </form>
    </div>
  </section>
</template>