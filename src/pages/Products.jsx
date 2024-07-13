import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = [
  {id: "1", title: "Product 1"},
  {id: "2", title: "Product 2"},
  {id: "3", title: "Product 3"},
]

const ProductsPage = () => {
  return (
    <Fragment>
      <h1>My Products Page</h1>
      <ul>
        {Products.map((product)=>(
          <li key={product.id}>
          <Link to={`${product.id}`}>{product.title}</Link>
        </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
