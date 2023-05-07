import EmblaCarousel from "../EmblaCarousel";
import Container from "@/app/components/Container";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Product({ params }) {
  const { slug } = params;
  console.log(slug);
  return (
    <Container>
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </Container>
  );
}
