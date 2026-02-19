import { Container, Logo, Title } from "./styles";
import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/fundo.svg";

const Header = () => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <Logo src={logo} alt="efood logo" />
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </Container>
  );
};

export default Header;
