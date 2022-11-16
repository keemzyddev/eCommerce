import { Send } from "@material-ui/icons";
import { Button, Container, Desc, Input, InputContainer, Title } from "./style";

const NewsLetter = () => {
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default NewsLetter;
