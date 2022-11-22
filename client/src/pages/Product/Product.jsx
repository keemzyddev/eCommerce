import Nav from "../../components/Nav/Nav";
import Announcement from "../../components/Announcement/Announcement";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import {
	AddContainer,
	Amount,
	AmountContainer,
	Button,
	Container,
	Desc,
	Filter,
	FilterColor,
	FilterContainer,
	FilterSize,
	FilterSizeOption,
	FilterTitle,
	Image,
	ImgContainer,
	InfoContainer,
	Price,
	Title,
	Wrapper,
} from "./style";
import { Add, Remove } from "@material-ui/icons";

const Product = () => {
	return (
		<Container>
			<Nav />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.ibb.co/56qMxwr/jean.jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dollor sit amet. lorem ipsum dollor sit amet. lorem
						ipsum dollor sit amet. lorem ipsum dollor sit amet.lorem ipsum
						dollor sit amet.
					</Desc>
					<Price>$20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default Product;
