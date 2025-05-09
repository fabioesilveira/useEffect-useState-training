import { useContext } from "react";
import Context from "./Context/Context";

export default function Confirmation() {
    const { checkoutInfo } = useContext(Context);

    return (
        <>
            <div className="my-container">
                <div className="confirmation-container">
                    <h1>Thank you for your purchase!</h1>

                    <h2>Delivery Information</h2>
                    <p><strong>Full Name:</strong> {checkoutInfo.fullName}</p>
                    <p><strong>Email:</strong> {checkoutInfo.email}</p>
                    <p><strong>Street:</strong> {checkoutInfo.street}</p>
                    <p><strong>City/State:</strong> {checkoutInfo.cityState}</p>

                    <p>Your order will be delivered soon. A confirmation email has been sent.</p>
                </div>
            </div>
        </>
    )
}