import './Auth.scss'

export const Auth = () => {
  return (
    <div className="formulario">
        <h1>My Account</h1>
        <div className="logreg">
            <label className="label reg__label"> Register</label>
            <label className="label log__label"> Sign In </label>
        </div>
        <form method="post">
            <div className="username">
                <input type="username" required />
                <label>Email</label>
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
