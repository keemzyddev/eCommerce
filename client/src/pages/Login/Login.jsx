import { Button, Container, Form, Input, LINK, Title, Wrapper } from "./style";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>LOGIN</Button>
					<LINK>FORGOT PASSWORD?</LINK>
					<LINK>CREATE A NEW ACCOUNT</LINK>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
