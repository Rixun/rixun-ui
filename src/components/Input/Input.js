import './Input.css';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const {
    className,
    rixunRef,
    id,
    name,
    type,
    placeholder,
    placeholderStyling,
    extraProps
  } = props;

  return (
    <div className='rixun-input-group'>
      <input
        className={`rixun-input ${className}`}
        ref={rixunRef}
        id={id}
        name={name}
        type={type}
        required
        {...extraProps}
      />
      <label htmlFor={id} className={`rixun-input-label ${placeholderStyling}`}>{placeholder}</label>
    </div>
  )
}

Input.defaultProps = {
  name: 'rixun-input',
  type: 'text',
}

Input.propTypes = {
  className: PropTypes.string,  
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onPaste: PropTypes.func,
  placeholderStyling: PropTypes.string,
  extraProps: PropTypes.object,
}