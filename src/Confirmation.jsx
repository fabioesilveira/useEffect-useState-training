import { useContext } from "react";
import Context from "./Context/Context";

export default function Confirmation() {
    const { checkoutInfo } = useContext(Context);
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    return (
        <>
            <div className="my-container">
                <div className="confirmation-container">
                    <h1 className="h1-confirmation">Congrats on your new gear 🎊🎉👏 </h1>
                    <h2 className="h2-confirmation-delivery">Order Confirmation</h2>
                    <p className="p-confirmation"><strong>Your order number is:</strong> #{orderNumber}</p>
                    <div className="div-delivery-info">
                        <h2 className="h2-confirmation-delivery">Delivery Information</h2>
                        <p>Thanks, {checkoutInfo.fullName}, for your purchase!
                            A confirmation email has been sent to {checkoutInfo.email}.
                            Your order will be delivered soon to:{checkoutInfo.street}, {checkoutInfo.cityState}</p>

                        <p>See you next time!</p>
                    </div>
                </div>
            </div>
        </>
    )
}