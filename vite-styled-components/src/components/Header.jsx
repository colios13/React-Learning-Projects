import { Container } from "./styles/Container.styled";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";


function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='' alt='chat icon and Huddle write to it right' />
          <Button>Try it Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;