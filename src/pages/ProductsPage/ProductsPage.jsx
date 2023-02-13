import { useGetProductsQuery } from "../../store/apis"
import { ProductCard } from "../../components";

import "./ProductsPage.scss";

export const ProductsPage = () => {

  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className="products-list">
      { !isLoading && data.data.map(product => <ProductCard product={product} key={product.item_id} />) }
    </div>
  )
}
