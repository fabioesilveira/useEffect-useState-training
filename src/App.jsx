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
          <h1 className="h1-home">SHOPPING CART</h1>

          <div className="div-img">

            <img className="img-home" src={data.thumb} />
          </div>

          <div className="div-btns-amount">
            <button className="btns-amount">+</button>
            <h3 className="h3-amount">{data.amount}</h3>
            <button className="btns-amount">-</button>
          </div>

          <h2 className="h2-price">TOTAL VALUE:</h2>
          <h2 className="price">${data.price}</h2>

          <div className="div-checkout">
            <button className="btn-checkout">CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  )
}