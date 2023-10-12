import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, Tokendata } from 'utils/auth';
import { removeAuthData} from 'utils/storage';
import React, { useEffect, useState } from 'react';
import history from './../../utils/history';
import { ReactComponent as LogoIcon } from './../../assets/img/logo64px.svg';
import './styles.css'

type AuthData = {
  authenticated: boolean,
  tokenData?: Tokendata
}

const NavBar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });

    }
    else {
      setAuthData({
        authenticated: false
      });
    }
  }, [])

  const logout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false
    });
    history.replace('/auth/login')
  }

  return (
    <nav className='fixed-top nav main-nav bg-fosco shadow-sm flex-md-row align-items-center p-3 py-3 '>
      <div className='nav-container container col-9' >
        <div className='logo'>
        <LogoIcon 
        width='3rem' height='3rem'
        />
        </div>
        <Link to='/' className='logo-text' >
          Metas Ulasoftware
        </Link>
      </div>
      <div className='login col-3 container text-secondary'>
        {/* CONDIÇÃO DE LOGIN E LOGOUT */}
        <span className='nav-username'>{authData.tokenData?.user_name}</span>
        {authData.authenticated ? (
          <a
            href='#logout'
            className='a'
            onClick={logout}
          >
            {'-'}Sair
          </a>
        ) : (
          <Link
            to='/auth/login'
            className='a'
          >
            Entrar
          </Link>
        )}
        {/* CONDIÇÃO DE LOGIN E LOGOUT */}
      </div>
    </nav>
  );
};

export default NavBar;