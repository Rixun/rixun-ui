import PropTypes from 'prop-types';
import './Footer.css';
import '../../theme/Theme.css';

export const Footer = (props) => {
  return (
    <>
      <footer>
        <p>Test Footer</p>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  className: '',
};

Footer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  footerRef: PropTypes.object,
  style: PropTypes.object,
  extraProps: PropTypes.object,
};
