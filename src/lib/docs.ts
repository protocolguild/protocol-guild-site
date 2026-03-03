import { Doc } from '../types/doc'

const files = import.meta.glob('/docs/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const pathToSlug = (path: string): string => {
  const file = path.split('/').pop() || ''
  return file.replace(/\.md$/, '')
}

const pathToOrder = (path: string): number => {
  const file = path.split('/').pop() || ''
  const match = file.match(/^(\d+)/)
  return match ? parseInt(match[1], 10) : 99
}

const extractTitle = (content: string, slug: string): string => {
  const match = content.match(/^#\s+(.+)$/m)
  if (match) return match[1].trim()
  // Fallback: humanise the slug
  return slug
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getAllDocs(): Doc[] {
  return Object.entries(files)
    .map(([path, raw]) => ({
      slug: pathToSlug(path),
      title: extractTitle(raw, pathToSlug(path)),
      content: raw,
      order: pathToOrder(path),
    }))
    .sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug: string): Doc | null {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`${slug}.md`))
  if (!entry) return null
  const [path, raw] = entry
  return {
    slug,
    title: extractTitle(raw, slug),
    content: raw,
    order: pathToOrder(path),
  }
}
