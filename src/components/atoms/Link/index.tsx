import React, { FC } from 'react';
import './styles.scss';

interface IProps {
  text?: string;
  href?: string;
  onClick?: (a: any) => void;
  classNames?: string;
  inline?: boolean;
}

const Link: FC<IProps> = ({ text, href, onClick, classNames, inline }) => {
  const classes = `link ${inline ? 'link__inline' : ''} ${
    classNames ? classNames : ''
  } `.trim();

  return (
    <a href={href} onClick={onClick} className={classes}>
      {text}
    </a>
  );
};

export default Link;
