import './Dropdown.css';
import PropTypes from 'prop-types';

export const Dropdown = (props) => {
  const {
    children,
    className,
    rixunRef,
    id,
    name,
    value,
    placeholder,
    onChange,
    extraProps
  } = props;

  return (
    <>
      <select
        className={`rixun-dropdown ${className}`}
        ref={rixunRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value=''>{placeholder}</option>}
        {children}
      </select>
    </>
  )
}

Dropdown.defaultProps = {
  name: 'rixun-dropdown',
  placeholder: 'Select'
}

Dropdown.PropTypes = {
  children: PropTypes.object,
  className: PropTypes.string,  
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  extraProps: PropTypes.object,
}