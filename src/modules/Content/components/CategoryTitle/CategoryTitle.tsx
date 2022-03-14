import { ComponentType, memo } from 'react';
import { CategoryTitleProps } from './Types';

const CategoryTitleComponent: ComponentType<CategoryTitleProps> = ({ title }) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
};

export const CategoryTitle = memo(
  CategoryTitleComponent,
  (previousProps, nextProps) =>
    previousProps.title.toLocaleLowerCase() === nextProps.title.toLocaleLowerCase()
);
