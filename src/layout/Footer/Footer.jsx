import "./Footer.scss";
import { images } from "../../constants/images";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-services">
				<a href="#" className="footer-title">
					CONTACT
				</a>
				<a href="#" className="footer-title">
					TERMS OF SERVICES
				</a>
				<a href="#" className="footer-title">
					SHIPPING AND RETURNS
				</a>
			</div>
			<div className="footer-copyright">
				<h4 className="footer-title">
					{" "}
					<span>&copy; Shoppe.</span> Terms of use <span>and</span> privacy
					policy.
				</h4>
				<div className="footer-networks">
					<h4 className="footer-title footer-mobil">
						<span>Follow us </span>
					</h4>
					<img className="img-networks" src={images.link} alt="" />
					<img className="img-networks" src={images.fb} alt="" />
					<img className="img-networks" src={images.ig} alt="instagram" />
					<img className="img-networks" src={images.tw} alt="twitter" />
				</div>
			</div>
		</div>
	);
};
