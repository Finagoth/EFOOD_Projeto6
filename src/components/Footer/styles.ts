import styled from "styled-components";

export const Container = styled.footer`
  background: #FFEBD9;
  padding: 40px 0;
`;

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Logo = styled.img`
  width: 125px;
  height: auto;
`;

export const Social = styled.div`
  display: flex;
  gap: 8px;
`;

export const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 24px;
    height: 34px;
  }
`;

export const Text = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  color: #e66767;
  margin-top: 64px;
`;
