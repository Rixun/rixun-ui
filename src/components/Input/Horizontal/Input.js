import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const HorizontalInput = (props) => {
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
    label,
    labelClassName,
    containerClassName,
    extraProps,
  } = props;

  return (
    // add className to the group here so it can be controlled too do it for the placeholder label too
    <div className={`rx-horizontal-input-group ${containerClassName}`}>
      <label
        htmlFor={id}
        className={`rx-horizontal-input-label ${labelClassName}}`}
      >
        {label}
      </label>
      <input
        className={`rx-horizontal-input rx-horizontal-input-${size} ${className}`}
        ref={rixunRef}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onClick={onClick}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        onPaste={onPaste}
        required
        {...extraProps}
      />
    </div>
  );
};

HorizontalInput.defaultProps = {
  name: 'rixun-input',
  size: 'medium',
  type: 'text',
};

HorizontalInput.propTypes = {
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
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  layout: PropTypes.string,
  extraProps: PropTypes.object,
};
