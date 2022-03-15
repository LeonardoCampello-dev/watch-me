import { ComponentType } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';

import { CategoryTitle } from './components';
import { MovieCard } from '../MovieCard/MovieCard';
import { ContentProps } from './Types';

export const Content: ComponentType<ContentProps> = ({ selectedGenre, movies }) => {
  const rowRenderer: ListRowRenderer = ({ index, style }) => {
    return (
      <div key={movies[index].imdbID} style={style}>
        <MovieCard
          title={movies[index].Title}
          poster={movies[index].Poster}
          runtime={movies[index].Runtime}
          rating={movies[index].Ratings[0].Value}
        />
      </div>
    );
  };

  const setup = {
    height: 600,
    rowHeight: 380,
    width: 800,
    overscanRowCount: 5,
    rowCount: movies.length
  };

  return (
    <div className="container">
      <CategoryTitle title={selectedGenre.title || ''} />

      <main>
        <List {...setup} rowRenderer={rowRenderer} />
      </main>
    </div>
  );
};
