import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export const Checkbox = (props) => {
  const {
    animated,
    className,
    id,
    checkboxRef,
    name,
    onChange,
    corners,
    defaultChecked,
    checked,
    style,
    disabled,
    labelText,
    tickClassName,
    containerClassName,
    labelClassName,
    extraProps,
    tickExtraProps,
    containerExtraProps,
    labelExtraProps,
  } = props;
  return (
    <div
      className={`rx-checkbox-container ${containerClassName}`}
      {...containerExtraProps}
    >
      <input
        className={`rx-checkbox rx-checkbox-${corners} ${className}`}
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        style={style}
        ref={checkboxRef}
        {...extraProps}
      />
      <svg
        viewBox="0 0 100 100"
        className={`rx-checkbox-tick ${tickClassName} ${
          animated ? 'rx-checkbox-tick-animated' : ''
        }`}
        {...tickExtraProps}
      >
        <polyline points="20,60 40,75 80,30" />
      </svg>
      <label
        className={`rx-checkbox-label ${labelClassName}`}
        htmlFor={id}
        {...labelExtraProps}
      >
        {labelText}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  animated: false,
  corners: 'round',
  className: '',
  checked: undefined,
  defaultChecked: undefined,
  style: undefined,
  tickClassName: '',
  containerClassName: '',
  labelClassName: '',
};

Checkbox.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  corners: PropTypes.oneOf(['square', 'round', 'circle']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checkboxRef: PropTypes.object,
  style: PropTypes.object,
  labelText: PropTypes.string,
  tickClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  extraProps: PropTypes.object,
  tickExtraProps: PropTypes.object,
  containerExtraProps: PropTypes.object,
  labelExtraProps: PropTypes.object,
};
