import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import Cart from "./pages/Cart/Cart";
// import Login from "./pages/Login/Login";
// import Product from "./pages/Product/Product";
// import Register from "./pages/Register/Register";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList/ProductList";
import Pay from "./components/stripe/Pay";
import Success from "./components/stripe/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />

          {/* <Home /> */}
          {/* <ProductList /> */}
          {/* <Product /> */}
          {/* <Register /> */}
          {/* <Login /> */}
          {/* <Cart /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
