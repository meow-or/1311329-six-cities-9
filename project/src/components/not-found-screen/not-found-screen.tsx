import { Link } from 'react-router-dom';
import MainLogoSvg from '../main-logo-svg/main-logo-svg';

function NotFoundScreen(): JSX.Element {

  return (
    <>
      <MainLogoSvg/>

      <div className="page page--favorites-empty">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>404. Page not found</h1>
            <Link to="/" style={{textDecoration: 'underline'}}>Go to main page</Link>
          </div>
        </main>
        <footer className="footer">
          <Link className="footer__logo-link" to="/">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      </div>
    </>
  );
}

export default NotFoundScreen;
