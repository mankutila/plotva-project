import React from 'react';

import './GroupMembers.css';

export function GroupMembers(props) {
  const { avatars } = props;

  return (
    <div className="group-members">
      {
        avatars.map((avatar) => {
          return (
            <div className="avatar avatar--online avatar--md">
              <div className="avatar__img">
                <img src="http://via.placeholder.com/350x150" alt="name"/>
              </div>
            </div>
          )
        })
      }

      <div className="avatar avatar--online avatar--md">
        <div className="avatar__img">
          <img src="http://via.placeholder.com/350x150" alt="name"/>
        </div>
      </div>
      <div className="avatar avatar--online avatar--md">
        <div className="avatar__img">
          <img src="http://via.placeholder.com/350x150" alt="name"/>
        </div>
      </div>
      <div className="avatar avatar--online avatar--md">
        <div className="avatar__img">
          <img src="http://via.placeholder.com/350x150" alt="name"/>
        </div>
      </div>
      <div className="avatar avatar--online avatar--md">
        <div className="avatar__img">
          <img src="http://via.placeholder.com/350x150" alt="name"/>
        </div>
      </div>
      <div className="avatar avatar--online avatar--md">
        <div className="avatar__img">
          <img src="http://via.placeholder.com/350x150" alt="name"/>
        </div>
      </div>
      <div className="avatar avatar--md">
        <div className="avatar__img">5+</div>
      </div>
    </div>

  )

}
