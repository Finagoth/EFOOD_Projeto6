import React from "react";
import { Container, Content, Logo, Social, SocialLink, Text } from "./styles";

import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/X.svg";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="efood" />

        <Social>
          <SocialLink href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </SocialLink>

          <SocialLink href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </SocialLink>

          <SocialLink href="#" aria-label="Twitter">
            <img src={twitter} alt="Twitter" />
          </SocialLink>
        </Social>

        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </Content>
    </Container>
  );
};

export default Footer;
