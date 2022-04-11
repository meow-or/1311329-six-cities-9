import { useState, ChangeEvent } from 'react';
import RatingstarInput from '../ratingstar-input/ratingstar-input';
import { ratingstars } from '../../const';

function CommentForm(): JSX.Element {

  const [commentText, setCommentText] = useState('Tell how was your stay, what you like and what can be improved');

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingstars.map((ratingstar) => (
          <RatingstarInput
            key={ratingstar.count}
            ratingstar={ratingstar}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentText}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setCommentText(target.value);
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
