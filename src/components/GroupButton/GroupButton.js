import React from 'react';
import PropTypes from 'prop-types';
import './GroupButton.css';

export const GroupButton = (props) => {
  const {
    className,
    groupButtonRef,
    id,
    name,
    modern,
    value,
    placeholder,
    onChange,
    extraProps,
  } = props;

  return (
    <>
      {modern ? (
        <label className="rixun-gb-container">
          {placeholder}
          <input
            className={className}
            ref={groupButtonRef}
            type="radio"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            {...extraProps}
          />
          <span className="rixun-custom-gb"></span>
        </label>
      ) : (
        <>
          <input
            className={`rixun-gb ${className}`}
            ref={groupButtonRef}
            type="radio"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            {...extraProps}
          />
          <label htmlFor={id}>{placeholder}</label>
          <br />
        </>
      )}
    </>
  );
};

GroupButton.defaultProps = {
  name: 'rixun-groupbutton',
};

GroupButton.propTypes = {
  className: PropTypes.string,
  groupButtonRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  modern: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  extraProps: PropTypes.object,
};
