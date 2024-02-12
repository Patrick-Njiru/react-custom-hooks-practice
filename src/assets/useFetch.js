
import axios from "axios"
import { useEffect, useState } from "react"

// the naming convention of custom hooks requires that you start with the 'use' word when naming your hook
// e.g - useWhatever

// Create a custom hook when you want to avoid repeating the same logic or lines of code multiple times in various components.

// Also helps to reduce code clutter in components
export const useFetch = (url) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getProducts = () => {
    axios.get(url)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          setProducts(res.data)
          setIsLoading(false)
        }        
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
        console.log(err);
      })
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getProducts() }, [url])

  return {products, isLoading, error}
}
