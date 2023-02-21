import { Container } from "./styles/Container.styled";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";
import logo from "../images/logo.svg"
import { Button } from "./styles/Button.styled";


function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt='chat icon and Huddle write to it right' />
          <Button>Try it Free</Button>
        </Nav>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>

          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as
            you engage in genuine discussion.
          </p>

          <Button>
            Get started for free
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header;