import { useLocation, useParams } from "react-router-dom"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Context from "./Context/Context";


export default function Checkout() {
    const { quantity, price } = useParams();
    const location = useLocation();
    const { thumb, name } = location.state || {}
    const { setCheckoutInfo } = useContext(Context);

    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        street: "",
        cityState: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = () => {
        setCheckoutInfo(form);
        setProcessing(true);

        // Simulate processing delay
        setTimeout(() => {
            navigate("/confirmation"); // Replace with your final route
        }, 2000); // 3 seconds
    };

    return (
        <>
            <div className="my-container">
                {processing ? (
                    <div className="div-spinner">
                        <p className="mt-3">Processing your payment...</p>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <>
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
                            <input onChange={handleChange} type="text" name="fullName" placeholder="Enter your full name" required />
                            <label>Email:</label>
                            <input onChange={handleChange} type="email" name="email" placeholder="Enter your email" required />
                            <label>Street:</label>
                            <input onChange={handleChange} type="text" name="street" placeholder="Enter your address" required />
                            <label>City/State:</label>
                            <input onChange={handleChange} type="text" name="cityState" placeholder="Enter your city + State" required />
                        </form>

                        <h2 className="h2-payment-delivery">Payment</h2>
                        <form className="form-payment">
                            <label>Name on Card:</label>
                            <input type="text" placeholder="Enter your name" required />
                            <label>Card Number:</label>
                            <input type="text" placeholder="1234 5678 9012 3456" required />
                            <label>Valid Through:</label>
                            <input type="text" placeholder="MM/YY" required />
                            <label>CVV:</label>
                            <input type="text" placeholder="123" required />
                        </form>

                        <div className="div-process-payment">
                            <button className="btn-process-payment" onClick={handlePayment}>Process Payment</button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}