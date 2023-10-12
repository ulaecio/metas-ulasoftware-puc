import "./styles.css";
import { Link, NavLink } from "react-router-dom";

const NavbarAdm = () => (
  <nav className="row bg-primary fixed-top nav main-nav bg-fosco shadow-sm flex-md-row align-items-center p-3 py-3 ">
    <div className="col-2">
      {/* @ts-ignore*/}
      <Link to="/admin" href="link" className="nav-logo-text">
        <h4>Voltar</h4>
      </Link>
    </div>

    <div className="col-6 offset-2">
      <ul className="main-menu">
        <li>
          {/* @ts-ignore*/}
          <NavLink to="/" activeClassName="active" exact></NavLink>
        </li>
        <li>
          {/* @ts-ignore*/}
          <NavLink to="/products" activeClassName="active">
            Meus Produtos
          </NavLink>
        </li>
        <li>
          {/* @ts-ignore*/}
          <NavLink to="/admin" activeClassName="active">
            Cadastro
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavbarAdm;
