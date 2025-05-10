import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Context from "./Context/Context";

export default function Checkout() {
  const { quantity, price } = useParams();
  const location = useLocation();
  const { thumb, name } = location.state || {};
  const { setCheckoutInfo } = useContext(Context);

  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    street: ""
  });

  const [payment, setPayment] = useState({
    nameOnCard: "",
    cardNumber: "",
    validThrough: "",
    cvv: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (form.hasOwnProperty(name)) {
      setForm({ ...form, [name]: value });
    } else {
      setPayment({ ...payment, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!form.street.trim()) newErrors.street = "Street is required.";

    if (!payment.nameOnCard.trim()) newErrors.nameOnCard = "Name on card is required.";
    if (!/^\d{16}$/.test(payment.cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Card number must be 16 digits.";
    if (!/^\d{2}\/\d{2}$/.test(payment.validThrough)) newErrors.validThrough = "Use MM/YY format.";
    if (!/^\d{3}$/.test(payment.cvv)) newErrors.cvv = "CVV must be 3 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    setCheckoutInfo(form);
    setProcessing(true);

    setTimeout(() => {
      navigate("/confirmation");
    }, 3000);
  };

  return (
    <div className="my-container">
      {processing ? (
        <div className="div-spinner">
          <p className="mt-3">Processing your payment, Please don't refresh the page...</p>
          <div className="div-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </div>
        </div>
      ) : (
        <>
          <h1 className="h1-chekout">Checkout</h1>

          <div className="div-checkout-products">
            <p>Product: {name}</p>
            <img src={thumb} alt="Selected product" width={60} />
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${parseFloat(price).toFixed(2)}</p>
          </div>

          <h2 className="h2-payment-delivery">Delivery</h2>
          <form className="form-inputs-delivery">
            <label>Full Name:</label>
            <input onChange={handleChange} type="text" name="fullName" placeholder="Enter your full name" required />
            {errors.fullName && <p className="error">{errors.fullName}</p>}

            <label>Email:</label>
            <input onChange={handleChange} type="email" name="email" placeholder="Enter your email" required />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Street, City, State and Zipcode:</label>
            <input onChange={handleChange} type="text" name="street" placeholder="Enter your address complete" required />
            {errors.street && <p className="error">{errors.street}</p>}
          </form>

          <h2 className="h2-payment-delivery">Payment</h2>
          <form className="form-payment">
            <label>Name on Card:</label>
            <input name="nameOnCard" type="text" placeholder="Enter your name" required onChange={handleChange} />
            {errors.nameOnCard && <p className="error">{errors.nameOnCard}</p>}

            <label>Card Number:</label>
            <input name="cardNumber" type="text" placeholder="1234 5678 9012 3456" required onChange={handleChange} />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

            <label>Valid Through:</label>
            <input name="validThrough" type="text" placeholder="MM/YY" required onChange={handleChange} />
            {errors.validThrough && <p className="error">{errors.validThrough}</p>}

            <label>CVV:</label>
            <input name="cvv" type="text" placeholder="123" required onChange={handleChange} />
            {errors.cvv && <p className="error">{errors.cvv}</p>}
          </form>

          <div className="div-process-payment">
            <button className="btn-process-payment" onClick={handlePayment}>Process Payment</button>
          </div>
        </>
      )}
    </div>
  );
}
