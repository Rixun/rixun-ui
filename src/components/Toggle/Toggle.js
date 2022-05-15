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
    containerExtraProps,
    checkboxExtraProps,
    switchClassName,
    switchExtraProps,
  } = props;

  return (
    <div
      className={`rixun-toggle-container ${
        active ? 'rixun-toggle-active' : ''
      } ${containerClassName}`}
      onClick={disabled ? null : onClick}
      id={id ? id : null}
      {...containerExtraProps}
    >
      <input type="checkbox" disabled={disabled} {...checkboxExtraProps} />
      <div
        className={`rixun-toggle rixun-toggle-${type} rixun-toggle-${corners} ${
          disabled ? 'rixun-toggle-disabled' : ''
        } ${className}`}
        {...extraProps}
        style={style ?? null}
      >
        <span
          className={`rixun-toggle-switch rixun-toggle-${corners} ${switchClassName}`}
          {...switchExtraProps}
        />
      </div>
    </div>
  );
};

Toggle.defaultProps = {
  type: 'border',
  corners: 'circle',
  className: '',
  disabled: false,
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
  extraProps: PropTypes.object,
  checkboxExtraProps: PropTypes.object,
  containerExtraProps: PropTypes.object,
  containerClassName: PropTypes.string,
  switchExtraProps: PropTypes.object,
  switchClassName: PropTypes.string,
};
