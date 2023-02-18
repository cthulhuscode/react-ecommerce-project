import { Link } from "react-router-dom"
import "./ErrorPage.scss"
export const Errorpage = () => {
    return (
        <div className="padre">
            <div className="page__error">404 ERROR</div>
            <div className="message__err">This Page not found; <br /> back to home and start again</div>
            <Link to="/">
            <input className="button__home label__home" type="button" value="HOMEPAGE" />
            </Link>
        </div>
    )
}
