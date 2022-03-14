import { memo } from 'react';
import { Star } from 'react-feather';

const MovieRatingComponent = ({ rating }: { rating: string }) => {
  return (
    <div>
      <Star /> {rating}
    </div>
  );
};

export const MovieRating = memo(
  MovieRatingComponent,
  (previousRating, nextRating) =>
    previousRating.rating.toLowerCase() === nextRating.rating.toLowerCase()
);
