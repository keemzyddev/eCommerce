import Nav from "../../components/Nav/Nav";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import {
	Container,
	Filter,
	FilterContainer,
	FilterText,
	Option,
	Select,
	Title,
} from "./style";

const ProductList = () => {
	return (
		<Container>
			<Nav />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Green</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default ProductList;
