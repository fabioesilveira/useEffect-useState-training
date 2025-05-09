import { useLocation, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function Checkout() {
    const { quantity, price } = useParams();
    const location = useLocation();
    const { thumb, name } = location.state || {}

    return (
        <>
            <div className="my-container">
                <h1 className="h1-chekout">Checkout</h1>

                <div className="div-checkout-products">
                    <p>Product: {name}</p>
                    <img src={thumb} alt="Selected product" width={80} />
                    <p>Quantity: {quantity}</p>
                    <p>Total Price: ${parseFloat(price).toFixed(2)}</p>
                </div>

                <h2 className="h2-payment-delivery">Delivery</h2>
                <form className="form-inputs-delivery">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <label>Street:</label>
                    <input
                        type="text"
                        placeholder="Enter your street address"
                        required
                    />
                    <label>City/State:</label>
                    <input
                        type="text"
                        placeholder="Enter your city + State"
                        required
                    />
                </form>

                <h2 className="h2-payment-delivery">Payment</h2>
                <form className="form-payment">
                    <label>Name on Card:</label>
                    <input
                        type="text"
                        placeholder="Enter the name on the card"
                        required
                    />
                    <label>Card Number:</label>
                    <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                    />

                    <label>Valid Through:</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        required
                    />

                    <label>CVV:</label>
                    <input
                        type="text"
                        placeholder="123"
                        required
                    />
                </form>
                <div className="div-process-payment">
                    <button className="btn-process-payment">Process Payment</button>
                </div>
                
            </div >
        </>
    )
}