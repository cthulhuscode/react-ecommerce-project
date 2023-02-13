import { useParams } from "react-router";
import "./ProductPage.scss";

export const ProductPage = () => {

  const { id } = useParams();

  return (
    <div>ProductPage - {id}</div>
  )
}
