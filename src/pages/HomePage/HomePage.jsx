import { ProductsList, Categories } from "../../components";

export const HomePage = () => {
  return (
    <div className="home">
      <Categories />
      <ProductsList /> 
    </div>
  )
}
