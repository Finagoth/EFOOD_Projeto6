import styled from "styled-components";
import fundo from "../../assets/images/fundo.svg";

export const TopBar = styled.header`
  background-color: #fdebd0;
  background-image: url(${fundo});
  background-repeat: repeat;
  padding: 64px 0;
`;

export const TopBarContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoCenter = styled.img`
  width: 125px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const TopLink = styled.a`
  color: #e66767;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  
`;

export const CartInfo = styled.span`
  color: #e66767;
  font-weight: 700;
  font-size: 18px;
`;

export const Hero = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Category = styled.span`
  color: #ffffff;
  font-size: 32px;
  font-weight: 100;
`;

export const RestaurantName = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 900;
`;

export const DishesGrid = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 56px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  align-items: stretch; /* faz todos os cards terem mesma altura */
`;
