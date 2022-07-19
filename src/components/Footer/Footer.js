import * as React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export const Footer = (props) => {
  const {
    className,
    linkContainerClassName,
    linkClassName,
    position,
    layout,
    columns,
    id,
    name,
    footerRef,
    style,
    extraProps,
  } = props;

  return (
    <>
      <footer
        className={`rixun-footer rixun-content-positon-${position} ${className}`}
        id={id}
        name={name}
        ref={footerRef}
        style={style}
        {...extraProps}
      >
        {columns.map((column, colIndex) => {
          return (
            <div
              key={colIndex}
              className={`rixun-link-container rixun-link-container-${layout} ${linkContainerClassName}`}
            >
              {column.map((item, index) => {
                return (
                  <a
                    href={item.to}
                    key={index}
                    className={`rixun-link ${linkClassName}`}
                  >
                    {item.linkName}
                  </a>
                );
              })}
            </div>
          );
        })}
      </footer>
    </>
  );
};

Footer.defaultProps = {
  className: '',
  linkContainerClassName: '',
  position: 'center',
};

Footer.propTypes = {
  children: PropTypes.string,
  linkContainerClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  position: PropTypes.string,
  layout: PropTypes.string,
  columns: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  footerRef: PropTypes.object,
  style: PropTypes.object,
  extraProps: PropTypes.object,
};
