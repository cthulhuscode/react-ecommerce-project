import { useParams, Link } from 'react-router-dom'
import './AuthPage.scss'

export const AuthPage = () => {
    const { auth } = useParams()

    return (
        <div className="formulario">
            <h1>My Account</h1>
            <div className="logreg">
                <Link to="/auth/register">
                    <label className={`label reg__label ${auth === 'register' ? 'label__selected' : ''}`}> Register</label>
                </Link>
                <Link to="/auth/login">
                    <label className={`label reg__label ${auth === 'login' ? 'label__selected' : ''}`}> Sign In</label>
                </Link>

                {/* <label className={`label reg__label ${auth==='register'?'label__selected':''}`}> Register </label> */}
                {/* <label className={`label reg__label ${auth==='login'?'label__selected':''}`}> Sign In </label> */}
            </div>
            <form method="post">
                <div className={`username__not ${auth === 'register' ? 'username' : ''}`}>
                    <input type="username" required />
                    <label>Email</label>
                </div>
                <div className="username register__selected">
                    <input type="username register__selected" required />
                    <label>Username</label>
                </div>
                <div className="username">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="recordar">
                    <p>
                        <label><input className="mycheck" type="checkbox" /> Recordarme</label>
                    </p>
                </div>
                {/* <input className="inputvalue" type="submit" value="SIGN IN" /> */}
                <button className='buttonvalue' >SIGN IN</button>
                <div className="registrarse">
                    Have you forgotten your password?<br />
                </div>
            </form>
        </div>
    )
}
