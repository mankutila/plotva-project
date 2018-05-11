import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export function Button({ txt }) {
  return <button className="btn">{ txt }</button>;
}

Button.propTypes = {
  txt: PropTypes.string
}
