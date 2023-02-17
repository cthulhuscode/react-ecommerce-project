import { useGetProductsQuery } from "../../store/apis"
import { ProductCard } from "../../components";
import { useSelector } from "react-redux";

import "./ProductsList.scss";
import { useMemo } from "react";

export const ProductsList = () => {
  const { data, isLoading } = useGetProductsQuery();
  const selectedCategory = useSelector(state => state.categories.selected || "All");
  const filteredProducts = useMemo(() => {
    if(!isLoading && selectedCategory !== "All")  
      return data.data.filter(
        product => product.title === selectedCategory
      )
    else if(!isLoading)
      return data.data
    }, [selectedCategory, isLoading]
  )

  return (
    <div className="products-list">
      { !isLoading && filteredProducts 
        ? filteredProducts.map(
          product => <ProductCard product={product} key={product.item_id} />
        ) 
        : <p>Loading...</p>
      }
    </div>
  )
}