import React from "react";
import { Card, Image, Content, Title, Desc, Button } from "./styles";

interface Props {
  image: string;
  title: string;
  description: string;
}

export const DishCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <Button>Adicionar ao carrinho</Button>
      </Content>
    </Card>
  );
};

export default DishCard;