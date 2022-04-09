import { Link } from 'react-router-dom';
import MainLogoSvg from '../../components/main-logo-svg/main-logo-svg';
import FavoriteCardContainer from '../../components/favorite-card-container/favorite-card-container';
import { Offers } from '../../types/offer';

type FavoritesProps = {
    offers: Offers;
  }

function Favorites({offers}: FavoritesProps): JSX.Element {

  const cities = offers.filter((item) => item.isFavorite).map((item) => item.city.name);
  const uniqueCities = [...new Set(cities)];

  return (
    <>
      <MainLogoSvg/>

      <div className="page">

        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to="/" className="header__logo-link">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81" height="41"
                  />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" title="Favorites" to="/favorites">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/sign-in" title="Sign out">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">

          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {uniqueCities.map((uniqCity) => (
                  <FavoriteCardContainer
                    key={uniqCity}
                    uniqCity={uniqCity}
                    offers={offers}
                  />
                ))}
              </ul>
            </section>
          </div>

        </main>

        <footer className="footer container">
          <Link to="/" className="footer__logo-link">
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

export default Favorites;
