import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import '../../theme/Theme.css';

export const Button = (props) => {
  const {
    className,
    id,
    buttonRef,
    name,
    onClick,
    corners,
    style,
    type,
    disabled,
    extraProps,
  } = props;

  return (
    <>
      <button
        className={`rixun-button-${type} rixun-button-${corners} ${className}`}
        id={id}
        ref={buttonRef}
        onClick={onClick}
        style={style}
        disabled={disabled}
        {...extraProps}
      >
        {name}
      </button>
    </>
  );
};

Button.defaultProps = {
  corners: 'round',
  className: '',
  type: 'default',
};

Button.propTypes = {
  className: PropTypes.string,
  corners: PropTypes.oneOf(['square', 'round', 'circle']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  buttonRef: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.oneOf(['default', 'link', 'outline']),
  extraProps: PropTypes.object,
};
