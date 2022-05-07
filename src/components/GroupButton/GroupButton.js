import './GroupButton.css';
import PropTypes from 'prop-types';

export const GroupButton = (props) => {
  const {
    className,
    groupButtonRef,
    id,
    name,
    value,
    placeholder,
    onChange,
    extraProps
  } = props;

  return (
    <>
      <input
        className={className}
        ref={groupButtonRef}
        type='radio'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...extraProps}
      />
      <label htmlFor={name}>{placeholder}</label>
      <br />
    </>
  )
}

GroupButton.defaultProps = {
  name: 'rixun-groupbutton'
}

GroupButton.propTypes = {
  className: PropTypes.string,
  groupButtonRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeTest: PropTypes.func,
  extraProps: PropTypes.object
}