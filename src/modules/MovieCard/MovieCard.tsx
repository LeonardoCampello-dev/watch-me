import { ComponentType } from 'react';

import { MovieInfo } from './components';
import { MovieCardProps } from './Types';

import './Styles.scss';

export const MovieCard: ComponentType<MovieCardProps> = props => {
  return (
    <div className="movie-card">
      <img src={props.poster} alt={props.title} />

      <div>
        <MovieInfo title={props.title} rating={props.rating} runtime={props.runtime} />
      </div>
    </div>
  );
};
