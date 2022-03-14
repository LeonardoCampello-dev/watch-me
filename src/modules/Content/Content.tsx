import { ComponentType } from 'react';

import { CategoryTitle } from './components';
import { MovieCard } from '../MovieCard/MovieCard';
import { ContentProps } from './Types';

export const Content: ComponentType<ContentProps> = ({ selectedGenre, movies }) => {
  return (
    <div className="container">
      <CategoryTitle title={selectedGenre.title || ''} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
