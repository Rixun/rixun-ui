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
      <input type='radio' id='test1' name='test' value='test1' />
      <label for='test1'>test1</label><br/>
      <input type='radio' id='test2' name='test' value='test2' />
      <label for='test2'>test2</label><br/>
      <input type='radio' id='test3' name='test' value='test3' />
      <label for='test3'>test3</label>
    </div>
  )
}

Dropdown.defaultProps = {
  name: 'rixun-groupbutton'
}

Dropdown.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,  
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  extraProps: PropTypes.object,
}