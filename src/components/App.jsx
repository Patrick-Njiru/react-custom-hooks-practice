import { useFetch } from "../assets/useFetch"

const API_URL = 'https://fakestoreapi.com/products/category/jewelery'

function App() {
  // custom hook created in a separate file.
  const {products, isLoading, error }  = useFetch(API_URL)

  return (
      <div className="container">
          <h2>Jewellery</h2>
      {isLoading ? <h4>Loading ...</h4>
        : error ? <div className="h1 alert alert-danger m-5">{ error }</div>
          : <ul className="list-group list-group-flush list-group-numbered">
            {products.map(product => <li className="list-group-item list-group-item-info" key={product.id}>{ product.title }</li> )}
          </ul>
      }
    </div>
  )
}

export default App
