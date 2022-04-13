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
    corners,
    onChange,
    hover,
    extraProps
  } = props;

  return (
    <>
      {!hover ? (
        <select
          className={`rixun-dropdown rixun-dropdown-${corners} ${className}`}
          ref={rixunRef}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...extraProps}
        >
          { placeholder && <option value='' hidden={true}>{placeholder}</option> }
          { children }
        </select>
      ) : (
        <div className='rixun-dropdown-button'>
          <button className={`rixun-dropbutton rixun-dropdown-${corners} ${className}`}>{placeholder}</button>
          <div className={`rixun-dropdown-content rixun-dropdown-content-${corners}`}>
            {children.map((child) => {
              return <a href='#' key={child}>{child}</a>
            })}
          </div>
        </div>
      )}
    </>
  )
}

Dropdown.defaultProps = {
  name: 'rixun-dropdown',
  placeholder: 'Select'
}

Dropdown.propTypes = {
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