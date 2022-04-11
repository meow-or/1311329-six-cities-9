import { Link } from 'react-router-dom';
import Card from '../card/card';
import { Offers } from '../../types/offer';
import { useState } from 'react';

type CardListProps = {
  offers: Offers;
}

function CardList({offers}: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      {offers.map((offer) => (
        <article
          key={offer.id}
          className="cities__place-card place-card"
          onMouseOver={() => {
            setActiveCard(offer.id);
          }}
        >
          {offer.isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )}

          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${offer.id}`} title='/room'>
              <img
                className="place-card__image"
                src={offer.previewImage}
                width="260"
                height="200"
                alt="Place pict"
              />
            </Link>
          </div>
          <Card
            cardOffer={offer}
            activeCard={activeCard}
          />
        </article>
      ))}
    </>
  );
}

export default CardList;
