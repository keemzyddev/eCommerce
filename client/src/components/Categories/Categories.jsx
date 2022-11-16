import { categories } from '../../data';
import CategoryItem from './CategoryItem/CategoryItem';
import { Container } from './style';

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Categories;