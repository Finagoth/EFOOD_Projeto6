import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CardRestaurant } from "../../components/CardRestaurant";

import { Restaurant } from "../../types/efood";
import { getRestaurants } from "../../services/api";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  align-items: stretch;
`;

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurants()
      .then((data: React.SetStateAction<Restaurant[]>) => setRestaurants(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          restaurants.map((r, index) => (
            <CardRestaurant
              key={r.id}
              id={r.id}
              image={r.capa}
              title={r.titulo}
              description={r.descricao}
              rating={String(r.avaliacao)}
              tags={[...(index === 0 ? ["Destaque da semana"] : []), r.tipo]}
            />
          ))
        )}
      </Container>
      <Footer />
    </>
  );
}
