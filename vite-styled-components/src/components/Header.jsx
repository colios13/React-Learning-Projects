import { Container } from "./styles/Container.styled";
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";
import logo from "../images/logo.svg"
import illustrationMockups from "../images/illustration-mockups.svg"
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";


function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt='chat icon and Huddle write to it right' />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get started for free
            </Button>
          </div>
          <Image src={illustrationMockups} alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;