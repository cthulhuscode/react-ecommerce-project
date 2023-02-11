import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Navbar } from "../../layout/Navbar/Navbar"
import { Categories } from "../../layout/Categories/Categories"

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <br />
      <ProductCard />
    </div>
  )
}
