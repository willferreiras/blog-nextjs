import styled from "styled-components";
import { Post } from "../../models/post.model";
import { PostGridCard } from "./grid-card.component";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px; /* altura base dos cards */
  grid-gap: 12px;
  grid-auto-flow: dense; /* preenche lacunas */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 130px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto; /* altura automática no mobile */
  }
`;

type MasonryGridProps = {
  posts: Post[];
};

export function MasonryGrid({ posts }: MasonryGridProps) {
  return (
    <GridContainer>
      {posts.map((post, i) => (
        <PostGridCard
          key={post.id}
          post={post}
          variant={i % 5 === 0 ? "large" : "small"}
        />
      ))}
    </GridContainer>
  );
}
