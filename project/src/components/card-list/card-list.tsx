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
          active-card={activeCard}
        >
          <Card
            cardOffer={offer}
          />
        </article>
      ))}
    </>
  );
}

export default CardList;
