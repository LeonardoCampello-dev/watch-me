import { Icon } from '../Icon/Icon';

import { ComponentType, memo } from 'react';
import { ButtonProps } from './Types';

import './Styles.scss';

export const ButtonComponent: ComponentType<ButtonProps> = ({
  iconName,
  title,
  selected,
  ...rest
}) => {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
};

export const Button = memo(
  ButtonComponent,
  (previousProps, nextProps) => JSON.stringify(previousProps) === JSON.stringify(nextProps)
);
