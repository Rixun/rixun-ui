import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import '../../theme/Theme.css';

export const Modal = (props) => {
  const {
    active,
    boxType,
    className,
    corners,
    id,
    modalRef,
    style,
    extraProps,
    children,
    containerClassName,
    containerExtraProps,
    backgroundOnClick,
    backgroundClassName,
    backgroundExtraProps,
  } = props;

  return (
    <div
      className={`rx-modal-container rx-modal-${active} ${containerClassName}`}
      {...containerExtraProps}
    >
      <div
        id={id}
        ref={modalRef}
        className={`rx-modal-${boxType} rx-modal-${corners} ${className} `}
        style={style}
        {...extraProps}
      >
        {active && children}
      </div>
      <div
        className={`rx-modal-background ${backgroundClassName}`}
        onClick={backgroundOnClick}
        {...backgroundExtraProps}
      />
    </div>
  );
};

Modal.defaultProps = {
  active: false,
  className: '',
  backgroundClassName: '',
  containerClassName: '',
  corners: 'round',
  boxType: 'opaque',
};

Modal.propTypes = {
  active: PropTypes.bool,
  boxType: PropTypes.oneOf(['opaque', 'transparent', 'none']),
  className: PropTypes.string,
  children: PropTypes.node,
  corners: PropTypes.oneOf(['square', 'round', 'circle']),
  id: PropTypes.string,
  modalRef: PropTypes.object,
  style: PropTypes.object,
  extraProps: PropTypes.object,
  containerClassName: PropTypes.string,
  containerExtraProps: PropTypes.object,
  backgroundOnClick: PropTypes.func,
  backgroundClassName: PropTypes.string,
  backgroundExtraProps: PropTypes.object,
};
