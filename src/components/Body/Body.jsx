import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';

export function Body (props) {
  return (
    <main className="main">
      {props.content}
    </main>
  );
}

Body.propTypes = {
  content: PropTypes.element
}
