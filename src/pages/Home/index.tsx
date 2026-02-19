import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CardRestaurant } from "../../components/CardRestaurant";

import sushi from "../../assets/images/sushi.svg";
import banner from "../../assets/images/massa.svg";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const Home: React.FC = () => {
  const restaurants = [
  {
  id: 1,
  image: sushi,
  title: "Hioki Sushi ",
  description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  rating: "4.6",
  tags: ["Italiana"],
},
{
  id: 2,
  image: banner,
  title: "La Dolce Vita Trattoria",
  description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  rating: "4.6",
  tags: ["Italiana"],
},
{
  id: 3,
  image: banner,
  title: "La Dolce Vita Trattoria",
  description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  rating: "4.6",
  tags: ["Italiana"],
},
{
  id: 4,
  image: banner,
  title: "La Dolce Vita Trattoria",
  description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  rating: "4.6",
  tags: ["Italiana"],
},
{
  id: 5,
  image: banner,
  title: "La Dolce Vita Trattoria",
  description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  rating: "4.6",
  tags: ["Italiana"],
},
{
  id: 6,
  image: banner,
  title: "La Dolce Vita Trattoria",
  description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
  rating: "4.6",
  tags: ["Italiana"],
},

]

  return (
    <>
      <Header />

      <Container>
        {restaurants.map((restaurant, index) => (
          <CardRestaurant key={index} {...restaurant} />
        ))}
      </Container>

      <Footer />
    </>
  );
};

export default Home;
