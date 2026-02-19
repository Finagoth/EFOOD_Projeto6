import React from "react";
import { Link } from "react-router-dom";

import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
  Rating,
  CardHeader,
  ImageWrapper,
} from "./styles";

import { Tags } from "../Tags";

interface CardRestaurantProps {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: string;
  tags?: string[];
}

export const CardRestaurant: React.FC<CardRestaurantProps> = ({
  id,
  image,
  title,
  description,
  rating,
  tags,
}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CardImage src={image} alt={title} />
        {tags?.length ? <Tags tags={tags} /> : null}
      </ImageWrapper>

      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Rating>{rating} ⭐</Rating>
        </CardHeader>

        <CardDescription>{description}</CardDescription>

        <CardFooter>
          <Link to={`/restaurante/${id}`}>
            <Button>Saiba mais</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};
