import ReviewsItem from '../reviews-item/reviews-item';
import { Reviews } from '../../types/review';

type ReviewsListProps = {
  roomReviews: Reviews;
}

function ReviewsList ({roomReviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {roomReviews.map((roomReview) => (
        <ReviewsItem key={roomReview.id} roomReview={roomReview}/>
      ))}
    </ul>

  );
}

export default ReviewsList;
