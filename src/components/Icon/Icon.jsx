import React from 'react';
import './Icon.css';

export const Icon = ({ type }) => {
  return <span className={`icon icon--${type}`} />;
}
