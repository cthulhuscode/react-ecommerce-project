import { Navbar } from "../../layout/Navbar/Navbar"
import { Categories } from "../../layout/Categories/Categories"

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Categories/>
    </div>
  )
}
