import Container from "../components/Container";
import ProductsList from "./ProductsList";
import Filter from "./Filter";

export default function Products() {
  return (
    <Container>
      <div className="px-2">
        <h2>All Plants</h2>
        <Filter />
        <ProductsList />
      </div>
    </Container>
  );
}
