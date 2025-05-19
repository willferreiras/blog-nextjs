import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";
import { useEffect } from "react";
import { Post } from "../../models/post.model";
import { CarouselCard } from "./card.component";

const CarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  .keen-slider {
    overflow: hidden;
  }

  .keen-slider__slide {
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
`;

export function PostCarousel({ posts }: { posts: Post[] }) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <CarouselContainer>
      <div ref={sliderRef} className="keen-slider">
        {posts.map((post) => (
          <div key={post.id} className="keen-slider__slide">
            <CarouselCard post={post} />
          </div>
        ))}
      </div>
    </CarouselContainer>
  );
}
