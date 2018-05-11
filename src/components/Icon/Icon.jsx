import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export const Icon = ({ type }) => {
  return <span className={`icon icon--${type}`} />;
}

Icon.propTypes = {
  type: PropTypes.string
}
