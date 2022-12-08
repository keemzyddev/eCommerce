import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <button>Go back</button>
        </Link>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Successful</h1>
        <p>Your order is being prepared. Thanks for choosing Keem Shop</p>
      </div>
    </>
  );
};

export default Success;
