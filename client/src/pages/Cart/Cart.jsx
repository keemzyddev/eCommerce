import Nav from "../../components/Nav/Nav";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import {
	Bottom,
	Button,
	Container,
	Details,
	Hr,
	Image,
	Info,
	PriceDetail,
	Product,
	ProductAmount,
	ProductAmountContainer,
	ProductColor,
	ProductDetail,
	ProductId,
	ProductName,
	ProductPrice,
	ProductSize,
	Summary,
	SummaryItem,
	SummaryItemPrice,
	SummaryItemText,
	SummaryTitle,
	Title,
	Top,
	TopButton,
	TopText,
	TopTexts,
	Wrapper,
} from "./style";
import { Add, Remove } from "@material-ui/icons";

const Cart = () => {
	return (
		<Container>
			<Nav />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
								<Details>
									<ProductName>
										<b>Product:</b> YEEZY BOOST
									</ProductName>
									<ProductId>
										<b>ID:</b> 9883645446
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size:</b> 45
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
								<Details>
									<ProductName>
										<b>Product:</b> YEEZY BOOST
									</ProductName>
									<ProductId>
										<b>ID:</b> 9883645446
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size:</b> 45
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$30</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$-5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$80</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
