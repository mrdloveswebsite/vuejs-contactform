// Wait for `ms` milliseconds (a Promise that resolves later)
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
 
// Pretend to be a server call. Swap this for a real fetch() later.
export async function fakeSubmit(data) {
  await delay(1500) // simulate network time
 
  // Simulate a server error sometimes (about 1 in 4), so you can see error handling
  if (Math.random() < 0.25) {
    throw new Error('Server is busy, please try again.')
  }
 
  return { ok: true, id: Date.now(), ...data }
}
 
/* The real version would look like this:
 
export async function submitForm(data) {
  const res = await fetch('https://example.com/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}
*/