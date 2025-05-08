import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const req = await axios.get("https://681504bd225ff1af162adcf7.mockapi.io/shoes/1")
      setData(req.data)
    }

    fetchApi()
  }, [])

  return (
    <div className="my-container">
      {!data ? <span>Loading</span> : (
        <div>
          <h1>Shopping Cart</h1>
          <img className="img-home" src={data.thumb} />

          <button>+</button>
          <h3>{data.amount}</h3>
          <button>-</button>
          <h2>TOTAL VALUE</h2>
          <h2>${data.price}</h2>
          <button>CHECKOUT</button>
        </div>
      )}
    </div>
  )
}