import React from 'react';
import './Body.css';

export function Body (props) {
  return (
    <main className="main">
      {props.content}
    </main>
  );
}
