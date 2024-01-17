import React from 'react';
import PropTypes from 'prop-types';
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

OnlyInput.defaultProps = {
  name: 'rixun-input',
  size: 'medium',
  type: 'text',
};

OnlyInput.propTypes = {
  className: PropTypes.string,
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onPaste: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholderClassName: PropTypes.string,
  layout: PropTypes.string,
  extraProps: PropTypes.object,
};
