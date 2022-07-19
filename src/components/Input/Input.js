import * as React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = (props) => {
  const {
    className,
    rixunRef,
    id,
    name,
    type,
    onClick,
    onFocus,
    onChange,
    onBlur,
    onPaste,
    placeholder,
    placeholderClassName,
    extraProps
  } = props;

  return (
    <div className='rixun-input-group'>
      <input
        className={`rixun-input ${className}`}
        ref={rixunRef}
        id={id}
        name={name}
        type={type}
        onClick={onClick}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        onPaste={onPaste}
        required
        {...extraProps}
      />
      <label htmlFor={id} className={`rixun-input-label ${placeholderClassName}`}>{placeholder}</label>
    </div>
  )
}

Input.defaultProps = {
  name: 'rixun-input',
  type: 'text',
}

Input.propTypes = {
  className: PropTypes.string,  
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onPaste: PropTypes.func,
  placeholderClassName: PropTypes.string,
  extraProps: PropTypes.object,
}