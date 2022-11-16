import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import {
	Center,
	ContactItem,
	Container,
	Desc,
	Left,
	List,
	ListItem,
	Logo,
	Payment,
	Right,
	SocialContainer,
	SocialIcon,
	Title,
} from "./style";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>KEEM</Logo>
				<Desc>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
					suscipit at pariatur, consequuntur iste a molestiae veritatis
					exercitationem cumque dolor eos deleniti quibusdam reiciendis. Facilis
					sed excepturi perferendis deserunt ipsum?
				</Desc>
				<SocialContainer>
					<SocialIcon color="385999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>White List</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight: '10px'}} />
					Plot 1026 Nyanya, Abuja. Nigeria 900103
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight: '10px'}}/>
					+234 815 604 92 14
				</ContactItem>
				<ContactItem>
					<MailOutline style={{marginRight: '10px'}}/> contact@keemzy.dev
				</ContactItem>
                <Payment src="https://1i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
