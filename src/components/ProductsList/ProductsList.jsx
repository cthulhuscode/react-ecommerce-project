import { useGetProductsQuery } from "../../store/apis"
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductsList = () => {

  const { data, isLoading } = useGetProductsQuery();

  return (
    <div>
      { !isLoading && data.data.map(product => <ProductCard key={product.item_id} />) }
    </div>
  )
}
