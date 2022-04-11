import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type CardProps = {
  cardOffer: Offer;
  activeCard: number;
}

function Card({cardOffer, activeCard}: CardProps): JSX.Element {

  const {price, title, type, isFavorite, rating, id} = cardOffer;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button button
          ${isFavorite && 'place-card__bookmark-button--active'}`}
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            width="18"
            height="19"
          >
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${rating / 0.05}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`} title='/room'>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

export default Card;
