import './GroupButton.css';
import PropTypes from 'prop-types';

export const GroupButton = (props) => {
  const {
    className,
    // rixunRef,
    id,
    name,
    value,
    placeholder,
    onChange,
    extraProps
  } = props;

  return (
    <div className={`rixun-groupbutton ${className}`}>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...extraProps}
      />
      <label htmlFor={name}>{placeholder}</label>
      <br />
    </div>
  )
}

GroupButton.defaultProps = {
  name: 'rixun-groupbutton'
}

GroupButton.propTypes = {
  className: PropTypes.string,  
  // rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeTest: PropTypes.func,
  extraProps: PropTypes.object  
}