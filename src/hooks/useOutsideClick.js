import { useEffect, useState } from "react";

export const useOutsideClick = (ref) => {
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		function handleClickOutside(e) {
			if (ref.current && !ref.current.contains(e.target)) setIsClicked(true);
			else setIsClicked(false);
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return isClicked;
};
