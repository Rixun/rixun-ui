import PropTypes from 'prop-types';
import './Toggle.css';
import '../../theme/Theme.css';

export const Toggle = (props) => {
  const {
    active,
    className,
    corners,
    disabled,
    id,
    onClick,
    type,
    style,
    extraProps,
    containerClassName,
    switchClassName,
  } = props;

  return (
    <div
      className={`rixun-toggle-container ${containerClassName} ${
        active ? 'rixun-toggle-active' : ''
      }`}
      onClick={onClick}
    >
      <input type="checkbox" />
      <div
        className={`rixun-toggle rixun-toggle-${type} rixun-toggle-${corners} ${className}`}
      >
        <span
          className={`rixun-toggle-switch rixun-toggle-${corners} ${switchClassName}`}
        />
      </div>
    </div>
  );
};

Toggle.defaultProps = {
  type: 'border',
  corners: 'circle',
  className: '',
  containerClassName: '',
  switchClassName: '',
};

Toggle.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  corners: PropTypes.oneOf(['square', 'round', 'circle']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['border', 'no-border']),
  style: PropTypes.object,
  // size: PropTypes.oneOf([])
  extraProps: PropTypes.object,
  containerClassName: PropTypes.string,
  switchClassName: PropTypes.string,
};
