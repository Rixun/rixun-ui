import PropTypes from 'prop-types';
import './Footer.css';
import '../../theme/Theme.css';

export const Footer = (props) => {
  const { children, position, className, id, name, footerRef, style, extraProps } = props;

  return (
    <>
      <footer
        className={`rixun-footer content-positon-${position} ${className}`}
        id={id}
        name={name}
        ref={footerRef}
        style={style}
        {...extraProps}
      >
        {children}
      </footer>
    </>
  );
};

Footer.defaultProps = {
  className: '',
  position: 'middle'
};

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  position: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  footerRef: PropTypes.object,
  style: PropTypes.object,
  extraProps: PropTypes.object,
};
