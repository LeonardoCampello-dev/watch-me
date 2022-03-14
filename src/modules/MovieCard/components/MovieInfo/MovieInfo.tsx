import { ComponentType, memo } from 'react';

import { MovieRating, MovieRuntime } from '..';
import { MovieInfoProps } from './Types';

export const MovieInfoComponent: ComponentType<MovieInfoProps> = ({ title, rating, runtime }) => {
  return (
    <div className="movie-info">
      <span>{title}</span>

      <div className="meta">
        <MovieRating rating={rating} />

        <MovieRuntime runtime={runtime} />
      </div>
    </div>
  );
};

export const MovieInfo = memo(
  MovieInfoComponent,
  (previousProps, nextProps) => JSON.stringify(previousProps) === JSON.stringify(nextProps)
);
