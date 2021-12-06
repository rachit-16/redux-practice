import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My First Book',
    description: 'The first book i ever wrote',
    price: 6,
  },
  {
    id: 'p2',
    title: 'My Second Book',
    description: 'The second book i ever wrote',
    price: 5,
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </section>
  )
}

export default Products
