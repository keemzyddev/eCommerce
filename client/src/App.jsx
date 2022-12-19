import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
// import CheckoutForm from "./components/stripe/CheckoutForm";
import Pay from "./components/stripe/Pay";
import Success from "./components/stripe/Success";
import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user.currentUser);
  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
