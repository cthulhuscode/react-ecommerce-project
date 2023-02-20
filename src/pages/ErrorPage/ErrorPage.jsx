import { useNavigate } from "react-router-dom";
import { Button } from "../../ui";
import "./ErrorPage.scss";

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="error">
            <h1 className="error__title">404 ERROR</h1>
            <h3 className="error__subtitle">
                This page not found; <br /> back to home and start again
            </h3>
            <Button
                variant={"white"}
                classes={"error__btn"}
                handleClick={() => { navigate("/", { replace: true }) }}
            >
                Homepage
            </Button>
        </div >
    );
};
