import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const Pay = () => {
  const cart = useSelector((state) => state.cart);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const price = cart.total;

  useEffect(() => {
    getPublishableKey();
  }, []);

  useEffect(() => {
    const createPaymentIntent = async () => {
      const res = await axios.post(
        "http://localhost:5000/api/checkout/payment",
        {
          price: price * 100,
        }
      );

      const { clientSecret } = res.data;
      setClientSecret(clientSecret);
      return clientSecret;
    };
    createPaymentIntent();
  }, [price]);
  console.log(price);
  const getPublishableKey = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/checkout/publishablekey"
    );
    const { publishableKey } = res.data;
    setStripePromise(loadStripe(publishableKey));
    return publishableKey;
  };

  return (
    <div>
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
