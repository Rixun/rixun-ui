import PropTypes from 'prop-types';
import './Footer.css';
import '../../theme/Theme.css';

export const Footer = (props) => {
  const { children, layout, columns, position, className, id, name, footerRef, style, extraProps } = props;

  return (
    <>
      <footer
        className={`rixun-footer content-positon-${position} content-layout-${layout} ${className}`}
        id={id}
        name={name}
        ref={footerRef}
        style={style}
        {...extraProps}
      >
        {
          columns.map((col) => (
            <p className={col[0].btnClassName}>{col[0].btnName}</p>
          ))

          // ** Footer Multiple Columns **
          // columns.forEach(item => {
          //   item.map((col) => (
          //     <p className={col[0].btnClassName}>{col[0].btnName}</p>
          //   ))
          // })

          // children
        }
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
  layout: PropTypes.string,
  columns: PropTypes.array,
  position: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  footerRef: PropTypes.object,
  style: PropTypes.object,
  extraProps: PropTypes.object,
};
