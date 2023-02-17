import { useGetProductsQuery } from "../../store/apis";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../store/slices";
import "./Categories.scss";

export const Categories = () => {
	const { data, isLoading } = useGetProductsQuery();
	const dispatch = useDispatch();

	const uniqueTitles = new Set();	

	const handleClick = (e) => {
		const category = e.currentTarget.name;
		dispatch(selectCategory(category));
	}

	return (
		<div className="category">
			<div className="category-flex ">
				<a className="category-item" key="all-items-xd" name="All" onClick={handleClick}>
					<h4 className="category_tittle-item">All</h4>
				</a>
				{!isLoading &&
					data.data.map((product) => {
						if (uniqueTitles.has(product.title)) {
							// Si el título ya se agregó antes, no se muestra en la pantalla
							return null;
						}

						uniqueTitles.add(product.title);

						return (
							<a className="category-item" href="#" key={product.col_id} name={product.title} onClick={handleClick}>
								<h4 className="category_tittle-item">{product.title}</h4>
							</a>
						);
					})}
			</div>
		</div>
	);
};
