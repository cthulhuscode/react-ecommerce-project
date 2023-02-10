import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Navbar } from "../../layout/Navbar/Navbar"

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <br />
      <ProductCard />
    </div>
  )
}
