import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import Cart from "./pages/Cart/Cart";
// import Login from "./pages/Login/Login";
// import Product from "./pages/Product/Product";
// import Register from "./pages/Register/Register";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList/ProductList";
import Pay from "./components/stripe/Pay";
import Success from "./components/stripe/Success";

const stripePromise = loadStripe(
	"pk_test_51M85IuFNzqFAzYPtu3zaAPNvtA6m3T2os1YmGx0bWyYzJ9PCvnzEJ5tgk8oVu2O067tsTGLYpGTmCjOThBx3GpMY00CqbWUBtb"
);

function App() {
	const options = {
		// passing the client secret obtained from the server
		clientSecret:
			"sk_test_51M85IuFNzqFAzYPtEm0zr6v2qxVShA4hVwXernlKPJ8wWsIFLZRonudxtZyjPMMIwbOFqGKGAB8RY1IhBT6hIzcq00hCrELGIh",
		// clientSecret: "{{CLIENT_SECRET}}",
	};
	return (
		<div className="App">
			<Elements stripe={stripePromise} options={options}>
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
			</Elements>
		</div>
	);
}

export default App;
