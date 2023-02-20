import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logInUser, registerUser } from "../../store/slices";
import { Button } from "../../ui";
import "./AuthPage.scss";

const Operations = {
    signIn: "Sign In",
    register: "Register",
};

export const AuthPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.user.authUser);

    const [operation, setOperation] = useState(state?.authOp || Operations.signIn);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleTabClick = (e) => {
        const op = e.target.name;
        setOperation(op);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            displayName: name,
            email,
            password,
        };

        let success = false;
        if (operation === Operations.signIn) {
            success = await dispatch(logInUser(user));
        }
        else if (operation === Operations.register) {
            success = dispatch(registerUser(user));
        }

        if (success) {
            setName("");
            setEmail("");
            setPassword("");
            navigate(state.from || "/", { replace: true })
        }
        else
            alert("Ocurred an error while trying to access. Please try again later.")
    };

    useEffect(() => {
        if (authUser) {
            navigate("/", { replace: true })
        }
    }, [])


    return (
        <div className="auth">
            <h1 className="auth__title">My Account</h1>

            <div className="auth__tabs">
                <button
                    className={`auth__tab 
                        ${operation === Operations.signIn && "auth__tab--active"
                        }                    
                    `}
                    onClick={handleTabClick}
                    name={Operations.signIn}
                >
                    {Operations.signIn}
                </button>
                <button
                    className={`auth__tab 
                        ${operation === Operations.register &&
                        "auth__tab--active"
                        }
                    `}
                    onClick={handleTabClick}
                    name={Operations.register}
                >
                    {Operations.register}
                </button>
            </div>

            <form className="auth__form" onSubmit={handleSubmit}>
                <input
                    className="auth__form-control auth__form-text"
                    name="name"
                    style={{
                        display: `${operation !== Operations.register ? "none" : ""}`,
                    }}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}

                />
                <input
                    className="auth__form-control auth__form-text"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}

                />
                <input
                    className="auth__form-control auth__form-text"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}

                />
                <div className="auth__form-control auth__form-ckb-div">
                    <input
                        className="auth__form-checkbox"
                        type="checkbox"
                        name="remember"
                        id="remember"
                    />
                    <label className="auth__form-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>

                <Button type="submit" classes={"auth__form-control auth__form-btn"} variant={"black"}>
                    Sign In
                </Button>
            </form>
            <p className="auth__forget">Have you forgotten your password?</p>
        </div>
    );
};
