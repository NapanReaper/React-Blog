import { useEffect, useState } from 'react'
const useFetch = (url) => {
 const abortControl = new AbortController();

 const [data, setData] = useState([])
 const [isLoading, setLoading] = useState(true)
 const [error, setError] = useState(null)

 const fetchData = async () => {
  const resp = await fetch(url, { signal: abortControl.signal });
  if (resp.ok) {
   setData(await resp.json())
   setError('')
  } else {
   setError(resp.statusText)
  }
  setLoading(false)
 }

 useEffect(() => {
  fetchData()
  return () => abortControl.abort();
 }, [url])

 return { data, isLoading, error }
}

export default useFetch
