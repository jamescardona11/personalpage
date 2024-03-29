import { useEffect } from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
// import fetcher from 'lib/fetcher'

export default function ViewCounter(slug) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    registerView()
  }, [slug])
  return <span>{`${views > 0 ? views.toLocaleString() + 'views' : ''} `}</span>
}
