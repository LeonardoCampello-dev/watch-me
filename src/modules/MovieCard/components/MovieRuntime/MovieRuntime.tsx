import { memo } from 'react';
import { Clock } from 'react-feather';

const MovieRuntimeComponent = ({ runtime }: { runtime: string }) => {
  return (
    <div>
      <Clock /> {runtime}
    </div>
  );
};

export const MovieRuntime = memo(
  MovieRuntimeComponent,
  (previousRuntime, nextRuntime) =>
    previousRuntime.runtime.toLowerCase() === nextRuntime.runtime.toLowerCase()
);
