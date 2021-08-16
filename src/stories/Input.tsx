import React from 'react';
import './styles.css';

interface InputProps {
    type?: string;
    value?: string;
    content?: 'empty' | 'full';
}

export const Input = ({
    type,
    value,
    content = 'empty',
    ...props
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      placeholder="Заполните поле"
      className={`input_${content}`}
      {...props}
    />
  );
};
