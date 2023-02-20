import { ProductsList, Categories } from "../../components";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="home">
      <Categories />
      <ProductsList />
    </div>
  )
}
