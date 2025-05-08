import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {

  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    async function fetchApi() {
      const req = await axios.get("https://681504bd225ff1af162adcf7.mockapi.io/shoes/1")
      setData(req.data)
      setCounter(req.data.amount)
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
            <button onClick={() => counter < data.max_amount && setCounter(counter + 1)}
              className="btns-amount"
              disabled={counter >= data.max_amount}>
              +
            </button>

            <h3 className="h3-amount">{counter}</h3>

            <button onClick={() => counter > data.amount && setCounter(counter - 1)}
              className="btns-amount"
              disabled={counter <= data.amount}>
              -
            </button>
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