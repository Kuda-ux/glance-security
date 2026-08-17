import { mkdir, writeFile } from 'node:fs/promises'
import { get } from 'node:https'
import { URL } from 'node:url'

const photos = [
  { slug: '2b7thBC3Cf8', filename: 'hero-guard.jpg' },
  { slug: 'W_dau70yjHQ', filename: 'about-guard.jpg' },
  { slug: 'SaZ8cZau-q0', filename: 'entrance-guard.jpg' },
  { slug: 'YQ9aFeawqeo', filename: 'event-guard.jpg' },
  { slug: '3RM3wBDAcis', filename: 'campus-guard.jpg' },
  { slug: 'pLD-QID7x3k', filename: 'access-control.jpg' },
  { slug: 'CY1JLARpgrc', filename: 'surveillance-cameras.jpg' },
  { slug: 'w-4-m8bvXAo', filename: 'office-facade.jpg' },
  { slug: 'ee0PEbw_CQs', filename: 'office-night.jpg' },
]

const outDir = new URL('../public/images/', import.meta.url)

function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = get(url, { ...options, headers: { 'User-Agent': 'Mozilla/5.0', ...(options.headers || {}) } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(request(new URL(res.headers.location, url).toString(), options))
        return
      }
      resolve({ res, url })
    })
    req.on('error', reject)
  })
}

await mkdir(outDir, { recursive: true })

for (const { slug, filename } of photos) {
  try {
    const downloadUrl = `https://unsplash.com/photos/${slug}/download?force=true`
    const { url: finalUrl } = await request(downloadUrl)
    const u = new URL(finalUrl)
    u.search = `?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.1.0`
    const { res } = await request(u.toString())
    if (res.statusCode !== 200) {
      throw new Error(`HTTP ${res.statusCode}`)
    }
    const chunks = []
    for await (const chunk of res) chunks.push(chunk)
    const buffer = Buffer.concat(chunks)
    await writeFile(new URL(filename, outDir), buffer)
    console.log(`✓ ${filename} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`)
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`)
  }
}
