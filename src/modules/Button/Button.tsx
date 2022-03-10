import { Icon } from '../Icon/Icon';

import { memo } from 'react';
import { ButtonProps } from './Types';

import './Styles.scss';

export function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button = memo(
  ButtonComponent,
  (previousProps, nextProps) => JSON.stringify(previousProps) === JSON.stringify(nextProps)
);
