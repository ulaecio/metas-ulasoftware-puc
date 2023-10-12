import { Link, NavLink } from "react-router-dom";
import { getTokenData, isAuthenticated, Tokendata } from "utils/auth";
import { removeAuthData } from "utils/storage";
import React, { useEffect, useState } from "react";
import history from "../../../utils/history";
import "./styles.css";

type AuthData = {
  authenticated: boolean;
  tokenData?: Tokendata;
};

const NavBarSeller = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const logout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace("/auth/login");
  };
  return (
    <nav className="nav main-nav bg-fosco fixed-top shadow-sm flex-md-row align-items-center p-0 py-3">
      <div className="nav-container container col-9 ">
        <div className="logo">
          {/* <LogoIcon width="3rem" height="3rem" /> */}
        </div>
        <NavLink to="/admin" className="logo-text">
          Voltar
        </NavLink>
        <div className="nav-container container col-2 ">
          <NavLink to="/products" className="logo-text ml-2">
            Produtos
          </NavLink>
        </div>
      </div>
      <div className="login col-3 container text-secondary">
        {/* CONDIÇÃO DE LOGIN E LOGOUT */}
        <span className="nav-username">{authData.tokenData?.user_name}</span>
        {authData.authenticated ? (
          <a href="#logout" className="a" onClick={logout}>
            {"-"}Sair
          </a>
        ) : (
          <Link to="/auth/login" className="a">
            Login
          </Link>
        )}
        {/* CONDIÇÃO DE LOGIN E LOGOUT */}
      </div>
    </nav>
  );
};

export default NavBarSeller;
