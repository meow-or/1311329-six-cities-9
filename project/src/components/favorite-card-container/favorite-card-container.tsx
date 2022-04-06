import { Link } from 'react-router-dom';
import { Offers } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteCardContainerProps = {
  uniqCity: string;
  offers: Offers;
}

function FavoriteCardContainer({uniqCity, offers}: FavoriteCardContainerProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{uniqCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.filter((offer) => offer.isFavorite).filter((offer) => offer.city.name === uniqCity).map((offer) => (
          <FavoriteCard
            key={offer.id}
            favoriteCardOffer={offer}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoriteCardContainer;
