import { useEffect } from 'react'
import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json())
// const url = 'https://jsonplaceholder.typicode.com/posts'
export default function ViewCounter({ slug }) {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher)
  // const views = new Number(data?.total)

  // useEffect(() => {
  //   const registerView = () =>
  //     fetch(`/api/views/${slug}`, {
  //       method: 'POST',
  //     })

  //   registerView()
  // }, [slug])
  return <span>'---'</span>
}
