import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = (props) => {
  const { className, corners, children, onClick, id, type, style, extraProps } =
    props;
  return (
    <div
      id={id}
      className={`rx-card-${type} rx-card-${corners} ${className} `}
      onClick={onClick}
      style={style}
      {...extraProps}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  corners: 'round',
  type: 'shadow',
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  corners: PropTypes.oneOf([
    'square',
    'round',
    'mid-round',
    'very-round',
    'circle',
  ]),
  onClick: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.oneOf(['shadow', 'border', 'empty']),
  style: PropTypes.object,
  extraProps: PropTypes.object,
};
