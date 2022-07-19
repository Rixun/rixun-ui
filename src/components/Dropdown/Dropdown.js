import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export const Dropdown = (props) => {
  const {
    children,
    className,
    rixunRef,
    id,
    name,
    value,
    placeholder,
    corners,
    onChange,
    hover,
    extraProps,
  } = props;

  return (
    <>
      {hover ? (
        <div className="rixun-dropdown-button">
          <button
            className={`rixun-dropbutton rixun-dropdown-${corners} ${className}`}
          >
            {placeholder}
          </button>
          <div
            className={`rixun-dropdown-content rixun-dropdown-content-${corners}`}
          >
            {children.map((child) => {
              return (
                <a href="#" key={child}>
                  {child}
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <select
          className={`rixun-dropdown rixun-dropdown-${corners} ${className}`}
          ref={rixunRef}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...extraProps}
        >
          {placeholder && (
            <option value="" hidden={true}>
              {placeholder}
            </option>
          )}
          {children}
        </select>
      )}
    </>
  );
};

Dropdown.defaultProps = {
  name: 'rixun-dropdown',
  placeholder: 'Select',
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  extraProps: PropTypes.object,
};
