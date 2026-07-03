/**
 * useGuildStats
 *
 * Fetches the two numbers that appear in hero/section copy across the site:
 *   - totalDistributed  →  "$38M"   (Dune query 4876407, total_vested_hist)
 *   - memberCount       →  "196"    (Dune query 2665887, latest total_count row)
 *
 * REPO_COUNT (47) has no live data source yet — update the constant below
 * or wire up Airtable once the API key is available.
 *
 * Results are cached in localStorage for 1 hour (same as DuneStat).
 * Hard-coded fallbacks are shown while loading or if Dune is unreachable.
 */

import { useState, useEffect } from 'react'

export const REPO_COUNT = '47'

const CACHE_DURATION = 1000 * 60 * 60 // 1 hour
const API_KEY = () => (import.meta.env.VITE_DUNE_API_KEY as string) || ''

async function fetchQuery(queryId: string): Promise<any[] | null> {
  // v2 suffix busts any stale pre-fix cache entries for member-count query
  const cacheKey = `dune-stat-${queryId}-v2`
  try {
    const cached = localStorage.getItem(cacheKey)
    if (cached) {
      const { data, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data?.result?.rows ?? null
      }
    }
  } catch {
    /* ignore corrupt cache */
  }

  try {
    const res = await fetch(
      `https://api.dune.com/api/v1/query/${queryId}/results`,
      { headers: { 'x-dune-api-key': API_KEY() } }
    )
    if (!res.ok) return null
    const data = await res.json()
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data, timestamp: Date.now() })
      )
    } catch { /* quota exceeded — skip caching */ }
    return data?.result?.rows ?? null
  } catch {
    return null
  }
}

function formatMillions(usdValue: number): string {
  const m = Math.round(usdValue / 1_000_000)
  return `$${m}M`
}

export interface GuildStats {
  /** e.g. "$38M" — total USD distributed to members */
  totalDistributed: string
  /** e.g. "196" — current active member count */
  memberCount: string
  /** e.g. "47" — number of tracked core repos (static constant) */
  repoCount: string
  loading: boolean
}

export function useGuildStats(): GuildStats {
  const [totalDistributed, setTotalDistributed] = useState('$38M')
  const [memberCount, setMemberCount] = useState('196')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      const [distRows, memberRows] = await Promise.all([
        fetchQuery('4876407'),
        fetchQuery('2665887'),
      ])

      if (cancelled) return

      // total_vested_hist is in the first (and only) row
      const dist = distRows?.[0]?.['total_vested_hist']
      if (typeof dist === 'number') setTotalDistributed(formatMillions(dist))

      // 2665887 is a time-series — take the max total_count across all rows
      // (avoids relying on Dune row sort order which may be newest-first)
      const count = memberRows?.reduce((max: number, row: any) => {
        const v = Number(row?.['total_count'])
        return isNaN(v) ? max : Math.max(max, v)
      }, 0)
      if (count > 0) setMemberCount(String(count))

      setLoading(false)
    })()

    return () => { cancelled = true }
  }, [])

  return { totalDistributed, memberCount, repoCount: REPO_COUNT, loading }
}
