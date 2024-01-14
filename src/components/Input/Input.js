import React from 'react';
import PropTypes from 'prop-types';
import { PlaceholderLabelInput } from './LabelPlaceholder/Input';
import { OnlyInput } from './OnlyInput/Input';

const PlaceholderLabel = 'PlaceholderLabel';

export const Input = (props) => {
  const { layout } = props;

  if (layout === PlaceholderLabel) {
    return <PlaceholderLabelInput {...props} />;
  } else if (layout === 'Horizontal') {
    return null;
  } else {
    return <OnlyInput {...props} />;
  }
};

Input.defaultProps = {
  name: 'rixun-input',
  size: 'medium',
  type: 'text',
};

Input.propTypes = {
  className: PropTypes.string,
  rixunRef: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onPaste: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholderClassName: PropTypes.string,
  layout: PropTypes.string,
  extraProps: PropTypes.object,
};
