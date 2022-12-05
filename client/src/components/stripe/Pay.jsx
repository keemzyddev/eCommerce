import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Pay = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    getPublishableKey();
  }, []);

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const getPublishableKey = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/checkout/publishablekey"
    );
    const { publishableKey } = res.data;
    console.log(publishableKey);
    setStripePromise(loadStripe(publishableKey));
    return publishableKey;
  };

  const createPaymentIntent = async () => {
    const res = await axios.post("http://localhost:5000/api/checkout/payment");

    const { clientSecret } = res.data;
    console.log(clientSecret);
    setClientSecret(clientSecret);
    return clientSecret;
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      {/* <h1 style={{ margin: "20px" }}>Payment Element</h1> */}
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
