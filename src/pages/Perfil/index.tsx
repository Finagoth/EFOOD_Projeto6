import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { LogoCenter } from "./styles";

import {
  TopBar,
  TopBarContent,
  TopLink,
  CartInfo,
  Hero,
  HeroOverlay,
  HeroContent,
  Category,
  RestaurantName,
  DishesGrid,
} from "./styles";

import logo from "../../assets/images/logo.svg";
import banner from "../../assets/images/massa.svg";
import pizza from "../../assets/images/pizza.svg";
import { DishCard } from "../../components/DishCard";

export default function Perfil() {
  const dishes = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  }));

  return (
    <>
      {" "}
      <TopBar>
        {" "}
        <TopBarContent>
          {" "}
          <TopLink as={Link} to="/">
            Restaurantes{" "}
          </TopLink>{" "}
          <LogoCenter src={logo} alt="efood" />
          <CartInfo>0 produto(s) no carrinho</CartInfo>
        </TopBarContent>
      </TopBar>
      <Hero style={{ backgroundImage: `url(${banner})` }}>
        <HeroOverlay />
        <HeroContent>
          <Category>Italiana</Category>
          <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
        </HeroContent>
      </Hero>
      <DishesGrid>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
          />
        ))}
      </DishesGrid>
      <Footer />
    </>
  );
}
