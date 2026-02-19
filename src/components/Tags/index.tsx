import React from "react";
import { Container, TagItem } from "./styles";

interface TagsProps {
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Container>
      {tags.map((tag) => (
        <TagItem key={tag}>{tag}</TagItem>
      ))}
    </Container>
  );
};
