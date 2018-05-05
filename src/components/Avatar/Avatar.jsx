import React from 'react';
import api from '../../api';

import './Avatar.css';

export function Avatar( props ) {
  const { user, size } = props;

  return (
    <div className={`avatar ${user && user.online ? "avatar--online" : ''} avatar--${size}`}>
      <div className="avatar__img">
        <img src={user && user.img ? user.img : "http://via.placeholder.com/350x150"} />
      </div>
    </div>
  )
}
