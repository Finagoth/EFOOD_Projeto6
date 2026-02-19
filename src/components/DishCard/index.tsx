import { Card, Image, Content, Title, Desc, Button } from "./styles";

interface Props {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export const DishCard: React.FC<Props> = ({
  image,
  title,
  description,
  onClick,
}) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <Button type="button" onClick={onClick}>
          Mais detalhes
        </Button>
      </Content>
    </Card>
  );
};
