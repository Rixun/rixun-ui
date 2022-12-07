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
    disabled,
    style,
    type,
    icon,
    iconPosition,
    extraProps,
  } = props;

  return (
    <>
      <button
        className={`rixun-button-${type} rixun-button-${corners} button-icon-${iconPosition} ${className}`}
        id={id}
        ref={buttonRef}
        onClick={onClick}
        style={style}
        disabled={disabled}
        {...extraProps}
      >
        <span>{name}</span>
        <span className={`button-icon-padding-${iconPosition}`}>{icon}</span>
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
  id: PropTypes.string,
  buttonRef: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string,
  corners: PropTypes.oneOf(['square', 'round', 'circle']),
  disabled: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf(['default', 'link', 'outline']),
  icon: PropTypes.object,
  iconPosition: PropTypes.string,
  extraProps: PropTypes.object,
};
