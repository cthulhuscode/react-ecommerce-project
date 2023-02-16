import {useEffect , useState } from "react";
import "./Categories.scss";
import axios  from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  // Consimo de una api con axios
  useEffect(() => {
     const fetchItems = async () =>{
      try {
          const res = await axios('https://fakestoreapi.com/products')
          const response = await res.data;
          setCategories(removeDuplicates(response.map(item => item.category)));
      } catch (error) {
          console.log(error);
      }
     }
     fetchItems()
  },[]);
  // remove los duplicados de categorias
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  return (
    <div className="category">
      <h2>Category</h2>
      <div className="category-flex ">
        {
          categories.map((category) => 
            <a className="category-item" href="#"  key={category}> {/* Falta darle enlaces a las categorias */}
              <h4 className="category_tittle-item">{category}</h4>
            </a>
          )
        }
      </div>
    </div>
  )
}