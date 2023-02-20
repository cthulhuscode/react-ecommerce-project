import { useState } from "react";
import { Button } from "../../ui";
import "./AuthPage.scss";

const Operations = {
    signIn: "Sign In",
    register: "Register"
}

export const AuthPage = () => {
    const [operation, setOperation] = useState(Operations.signIn);

    const handleTabClick = (e) => {
        const op = e.target.name;
        setOperation(op);
    }

    return (
        <div className="auth">
            <h1 className="auth__title">My Account</h1>

            <div className="auth__tabs">
                <button
                    className={`auth__tab 
                        ${operation === Operations.signIn && 'auth__tab--active'}                    
                    `}
                    onClick={handleTabClick}
                    name={Operations.signIn}
                >
                    {Operations.signIn}
                </button>
                <button
                    className={`auth__tab 
                        ${operation === Operations.register && 'auth__tab--active'}
                    `}
                    onClick={handleTabClick}
                    name={Operations.register}
                >
                    {Operations.register}
                </button>
            </div>

            <form className="auth__form" action="">
                <input
                    className="auth__form-control auth__form-text"
                    style={{ display: `${operation !== Operations.register ? "none" : ""}` }}
                    type="text"
                    placeholder="Name"
                    required
                />
                <input className="auth__form-control auth__form-text" type="text" required placeholder="Email" />
                <input className="auth__form-control auth__form-text" type="password" required placeholder="Password" />
                <div className="auth__form-control auth__form-ckb-div">
                    <input className="auth__form-checkbox" type="checkbox" name="remember" id="remember" />
                    <label className="auth__form-label" htmlFor="remember">Remember me</label>
                </div>

                <Button classes={"auth__form-control auth__form-btn"} variant={"black"}>Sign In</Button>
            </form>
            <p className="auth__forget">Have you forgotten your password?</p>
        </div>
    );
};
