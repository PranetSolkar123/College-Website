import { useState, useEffect } from 'react'

/**
 * Generic data-fetching hook.
 * @param {Function} fetchFn  - An API function that returns a Promise
 * @param {Array}    deps     - Re-fetch when these change (like useEffect deps)
 */
export default function useFetch(fetchFn, deps = []) {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchFn()
      .then(res => { if (!cancelled) setData(res) })
      .catch(err => { if (!cancelled) setError(err.message || 'Failed to load') })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error }
}
