import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { DishCard } from "../../components/DishCard";
import { Modal } from "../../components/Modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addItem, openCart } from "../../store/slices/cartSlice";

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
  ModalContent,
  ModalTitle,
  ModalText,
  ModalPortion,
  ModalButton,
} from "./styles";

import logo from "../../assets/images/logo.svg";

type Dish = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
};

type Restaurant = {
  id: number;
  titulo: string;
  tipo: string;
  capa: string;
  cardapio: Dish[];
};

export default function Perfil() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const dispatch = useAppDispatch();

  const cartCount = useAppSelector((state) => state.cart.items.length);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const found = data.find((r) => r.id === Number(id));
        if (found) setRestaurant(found);
      });
  }, [id]);

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (!restaurant) {
    return (
      <>
        <TopBar>
          <TopBarContent>
            <TopLink as={Link} to="/">
              Restaurantes
            </TopLink>
            <img src={logo} alt="efood" />
            <CartInfo>0 produto(s) no carrinho</CartInfo>
          </TopBarContent>
        </TopBar>

        <p style={{ padding: 40, textAlign: "center" }}>Carregando...</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar>
        <TopBarContent>
          <TopLink as={Link} to="/">
            Restaurantes
          </TopLink>

          <img src={logo} alt="efood" />

          <CartInfo role="button" onClick={() => dispatch(openCart())}>
            {cartCount} produto(s) no carrinho
          </CartInfo>
        </TopBarContent>
      </TopBar>

      <Hero style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <HeroOverlay />
        <HeroContent>
          <Category>{restaurant.tipo}</Category>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </HeroContent>
      </Hero>

      <DishesGrid>
        {restaurant.cardapio.map((dish) => (
          <DishCard
            key={dish.id}
            image={dish.foto}
            title={dish.nome}
            description={dish.descricao}
            onClick={() => setSelectedDish(dish)}
          />
        ))}
      </DishesGrid>

      <Modal isOpen={!!selectedDish} onClose={() => setSelectedDish(null)}>
        {selectedDish && (
          <ModalContent>
            <img src={selectedDish.foto} alt={selectedDish.nome} />

            <div>
              <ModalTitle>{selectedDish.nome}</ModalTitle>
              <ModalText>{selectedDish.descricao}</ModalText>
              <ModalPortion>{selectedDish.porcao}</ModalPortion>

              <ModalButton
                type="button"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: selectedDish.id,
                      nome: selectedDish.nome,
                      foto: selectedDish.foto,
                      preco: selectedDish.preco,
                    }),
                  );

                  dispatch(openCart());
                  setSelectedDish(null);
                }}
              >
                Adicionar ao carrinho - {formatPrice(selectedDish.preco)}
              </ModalButton>
            </div>
          </ModalContent>
        )}
      </Modal>

      <Footer />
    </>
  );
}
