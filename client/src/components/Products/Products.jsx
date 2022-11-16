import { popularProducts } from "../../data";
import Product from "./Product/Product";
import { Container } from "./style";


const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product key={item.id} item={item} />
        ))}
    </Container>
  )
}

export default Products