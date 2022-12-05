import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setMessage(error.message);
    }
    setIsProcessing(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      //   style={{
      //     height: "100vh",
      //     width: "1000vw",
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //     justifyContent: "center",
      //     margin: "10px",
      //   }}
    >
      <PaymentElement />
      <button
        disabled={isProcessing}
        style={{
          margin: "10px",
          border: "none",
          width: "80vh",
          borderRadius: "5px",
          padding: "20px",
          backgroundColor: "black",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        <span>{isProcessing ? "Processing" : "Pay Now"}</span>
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default CheckoutForm;
