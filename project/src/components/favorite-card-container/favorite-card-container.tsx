import { Link } from 'react-router-dom';
import { Offers } from '../../types/offer';
import Card from '../card/card';

type FavoriteCardsProps = {
  uniqCity: string;
  offers: Offers;
}

function FavoriteCardContainer({uniqCity, offers}: FavoriteCardsProps): JSX.Element {

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
          <article
            key={offer.id}
            className="favorites__card place-card"
          >
            {offer.isPremium && (
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
            )}

            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={`/offer/${offer.id}`} title='/room'>
                <img
                  className="place-card__image"
                  src={offer.previewImage}
                  width="150"
                  height="110"
                  alt="Place pict"
                />
              </Link>
            </div>
            <Card
              cardOffer={offer}
              activeCard={0}
            />
          </article>
        ))}
      </div>
    </li>
  );
}

export default FavoriteCardContainer;
