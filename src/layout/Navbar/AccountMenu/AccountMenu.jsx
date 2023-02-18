import "./AccountMenu.scss";

export const AccountMenu = () => {
  return (
    <div className="account">
      <div className="account__circle"></div>
      <h3 className="account__signed">
        Signed In as{" "}
        <span className="account__signed--bold">{"Juanito"}</span>
      </h3>
      <hr />
      <ul className="account__list">
        <li className="account__list-item">Mi cuenta</li>
        <li className="account__list-item">Mis pedidos</li>
      </ul>
      <hr />
      <p className="account__logout">Cerrar sesión</p>
    </div>
  );
};
