import { useGetProductsQuery } from "../../store/apis"
import { ProductCard } from "../../components";

import "./ProductsList.scss";

export const ProductsList = () => {

  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className="products-list">
      { !isLoading && data.data.map(product => <ProductCard product={product} key={product.item_id} />) }
    </div>
  )
}