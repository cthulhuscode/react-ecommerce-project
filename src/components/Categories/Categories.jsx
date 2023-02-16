import { useGetProductsQuery } from "../../store/apis";
import "./Categories.scss";

export const Categories = () => {
	const { data, isLoading } = useGetProductsQuery();

	const uniqueTitles = new Set();

	return (
		<div className="category">
			<div className="category-flex ">
				{!isLoading &&
					data.data.map((product) => {
						if (uniqueTitles.has(product.title)) {
							// Si el título ya se agregó antes, no se muestra en la pantalla
							return null;
						}

						uniqueTitles.add(product.title);

						return (
							<a className="category-item" href="#" key={product.col_id}>
								<h4 className="category_tittle-item">{product.title}</h4>
							</a>
						);
					})}
			</div>
		</div>
	);
};
