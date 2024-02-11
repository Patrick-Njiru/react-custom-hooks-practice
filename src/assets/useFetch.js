
import { useEffect, useState } from "react"

// the naming convention of custom hooks requires that you start with the 'use' word when naming your hook
// e.g - useWhatever

// Create a custom hook when you want to avoid repeating the same logic or lines of code multiple times in various components.

// Also helps to reduce code clutter in components
export const useFetch = (url) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState('')

  const getProducts = async () => {
      const response = await fetch(url)
      if (!response.ok) {
        setErrors('Error ' + response.status)
        setIsLoading(false)
        console.log('Error ' + response.status);
      } else {
        const data = await response.json()
        setProducts(data)
        setIsLoading(false)
      }
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getProducts() }, [url])

  return {products, isLoading, errors}
}
