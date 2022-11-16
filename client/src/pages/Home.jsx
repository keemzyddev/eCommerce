import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Nav />
			<Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
		</div>
	);
};

export default Home;
