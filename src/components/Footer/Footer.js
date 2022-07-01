import PropTypes from 'prop-types';
import './Footer.css';
import '../../theme/Theme.css';

export const Footer = (props) => {
  const { layout, columns, position, className, id, name, footerRef, style, extraProps } = props;

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
          columns.map((column, colIndex) => {
            return (
              <div className={`rixun-item-container`}>
                    {column.map((item, index) => {
                      return <p className={`rixun-item-${item.linkClassName}`}>{item.linkName}</p>;
                    })}
              </div>
            );
          })
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
