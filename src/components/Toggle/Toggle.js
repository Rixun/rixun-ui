import PropTypes from 'prop-types';
import './Toggle.css';
import '../../theme/Theme.css';

export const Toggle = (props) => {
  const { active, className, disabled, id, onClick, type, style, extraProps } =
    props;

  return <div></div>;
};

Modal.defaultProps = {};

Modal.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  corners: PropTypes.oneOf(['square', 'round', 'circle']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'link', 'outline']),
  style: PropTypes.object,
  extraProps: PropTypes.object,
};
