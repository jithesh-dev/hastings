import React, { FC } from 'react';
import './styles.scss';

interface IProps {
  text?: string;
  href?: string;
  onClick?: (a: any) => void;
  classNames?: string;
}

const Button: FC<IProps> = ({ text, href, onClick, classNames }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`button ${classNames ? classNames : ''}`}
    >
      {text}
    </a>
  );
};

export default Button;
