import React from 'react';
import './Input.css';

export const PlaceholderLabelInput = (props) => {
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
    placeholderClassName,
    extraProps,
  } = props;

  return (
    <div className="rx-label-placeholder-input-group">
      <input
        className={`rx-label-placeholder-input rx-label-placeholder-input-${size} ${className}`}
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
        required
        {...extraProps}
      />
      <label
        htmlFor={id}
        className={`rx-label-placeholder-input-label ${placeholderClassName}`}
      >
        {placeholder}
      </label>
    </div>
  );
};
