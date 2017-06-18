import * as React from 'react';

export interface Props {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

function Button({ className, onClick, text }: Props) {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
}

export default Button;