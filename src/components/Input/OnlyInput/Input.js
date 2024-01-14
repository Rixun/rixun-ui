import React from 'react';
import './Input.css';

export const OnlyInput = (props) => {
  const {
    className,
    rixunRef,
    id,
    name,
    size,
    type,
    value,
    onClick,
    onFocus,
    onChange,
    onBlur,
    onPaste,
    placeholder,
    extraProps,
  } = props;

  return (
    <input
      className={`rx-only-input rx-only-input-${size} ${className}`}
      ref={rixunRef}
      id={id}
      name={name}
      type={type}
      value={value}
      onClick={onClick}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      onPaste={onPaste}
      placeholder={placeholder}
      required
      {...extraProps}
    />
  );
};
