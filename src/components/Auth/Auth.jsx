import { useParams, Link } from 'react-router-dom'
import './Auth.scss'

export const Auth = () => {
    const {auth} = useParams()
    console.log(auth);
    
  return (
    <div className="formulario">
        <h1>My Account</h1>
        <div className="logreg">
        <Link to="/auth/register">
        <label className={`label reg__label ${auth==='register'?'label__selected':''}`}> Register</label>
        </Link>
        <Link to="/auth/login">
        <label className={`label reg__label ${auth==='login'?'label__selected':''}`}> Sign In</label>
        </Link>

            {/* <label className={`label reg__label ${auth==='register'?'label__selected':''}`}> Register </label> */}
            {/* <label className={`label reg__label ${auth==='login'?'label__selected':''}`}> Sign In </label> */}
        </div>
        <form method="post">
            <div className={`username__not ${auth==='register'?'username':''}`}>
                <input type="username" required />
                <label>Email</label>
            </div>
            <div className="username register__selected">
                <input type="username register__selected" required/>
                <label>Nombre</label>
            </div>
            <div className="username">
                <input type="password" required/>
                <label>Password</label>
            </div>
            <div className="recordar">
                <p>

                    <label><input className="mycheck" type="checkbox" /> Recordarme</label>
                </p>
            </div>
            <input type="submit" value="SIGN IN"/>
            <div className="registrarse">
                Have you forgotten your password?<br/>
            </div>
        </form>
    </div>
  )
}
