import './GroupButton.css';
import PropTypes from 'prop-types';

export const GroupButton = (props) => {
  const {
    children,
    className,
    rixunRef,
    id,
    name,
    value,
    placeholder,
    hover,
    extraProps
  } = props;

  return (
    <div>
      <input
        id={id}
        name={name}
        type='radio'
        value='test1'
      />
      <label for='test1'>test1</label>
    </div>
  )
}

GroupButton.defaultProps = {
  name: 'rixun-groupbutton'
}

GroupButton.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,  
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  extraProps: PropTypes.object,
}