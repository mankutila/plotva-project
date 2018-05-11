import React from 'react';

import './Avatar.css';

export function Avatar( props ) {
  const { user, size, chatName } = props;
  let name = '';
  let defaultName = '';
  if (user && user.name) {
    name = user.name;
  } else if (chatName) {
    name = chatName;
  }
  if (name) {
    name.split(' ').forEach(word => {
      defaultName += word[0];
    });
    defaultName.slice(2);
  }

  return (
    <div className={`avatar ${user && user.online ? "avatar--online" : ''} avatar--${size}`}>
      <div className="avatar__img">
        {user && user.img ? <img src={user.img} /> : defaultName}
      </div>
    </div>
  )
}
