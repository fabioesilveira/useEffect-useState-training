import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(null);
    const navigate = useNavigate()

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

                    <h2 className="h2-productName">{data.name}</h2>

                    <div className="div-img">

                        <img className="img-home" src={data.thumb} />
                    </div>

                    <div className="div-btns-amount">
                        <button onClick={() => counter > data.amount && setCounter(counter - 1)}
                            className="btns-amount"
                            disabled={counter <= data.amount}>
                            -
                        </button>

                        <h3 className="h3-amount">{counter}</h3>


                        <button onClick={() => counter < data.max_amount && setCounter(counter + 1)}
                            className="btns-amount"
                            disabled={counter >= data.max_amount}>
                            +
                        </button>

                    </div>

                    <h2 className="h2-price">TOTAL VALUE:</h2>
                    <h2 className="price">${data && counter ? (counter * data.price).toFixed(2) : '0.00'}</h2>

                    <div className="div-checkout">
                        <button className="btn-checkout"
                            onClick={() => navigate(`/checkout/${counter}/${counter * data.price}`, {
                                state: {
                                    thumb: data.thumb,
                                    name: data.name
                                }
                            })}
                        >CHECKOUT</button>
                    </div>
                </div>
            )}
        </div>
    )
}