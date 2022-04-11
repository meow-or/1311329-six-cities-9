import { useState, ChangeEvent } from 'react';
import { Ratingstar } from '../../types/ratingstar';

type RatingstarInputProps = {
  ratingstar: Ratingstar;
}

function RatingstarInput({ratingstar}: RatingstarInputProps): JSX.Element {

  const [ratingValue, setRatingValue] = useState('0');

  const ratingInputChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    setRatingValue(target.value);
  };

  const {count, labelTitle} = ratingstar;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={count.toString()}
        id={`${count}-stars`}
        type="radio"
        onChange={ratingInputChangeHandler}
        checked={ratingValue === count.toString()}
      />
      <label
        htmlFor={`${count}-stars`}
        className="reviews__rating-label form__rating-label"
        title={labelTitle}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

export default RatingstarInput;
