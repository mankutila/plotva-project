import React from 'react';

import './Chat.css';

export function Chat(props) {
    const { group, online, name, time, msg } = props;

    return (
      <section className={`chat ${group ? 'chat--group' : ''}`}>

        {group && (
          <React.Fragment>
            <div className="chat__name">Группа</div>
            <div className="chat__left">
              <div className="avatar avatar--online avatar--sm">
                <div className="avatar__img">
                  <img src="http://via.placeholder.com/350x150" alt="name"/>
                </div>
              </div>
            </div>
            <div className="chat__right">
              <div className="chat__msg">Привет! Подскажи пожалуйста хороши фильм</div>
            </div>
            <div className="chat__time">12:20</div>
            <div className="group-members">
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
              <div className="avatar avatar--online avatar--md">
                <div className="avatar__img">
                  <img src="http://via.placeholder.com/350x150" alt="name"/>
                </div>
              </div>
              <div className="avatar avatar--md">
                <div className="avatar__img">5+</div>
              </div>
            </div>
          </React.Fragment>
          )
        }

        {!group && (
          <React.Fragment>
            <div className="chat__left">
              <div className={`avatar ${online ? 'avatar--online' : ''}`}>
                <div className="avatar__img">
                  <img src="http://via.placeholder.com/350x150" alt="name"/>
                </div>
              </div>
            </div>
            <div className="chat__right">
              <div className="chat__name">{name}</div>
              <div className="chat__msg">{msg}</div>
              <div className="chat__time">{time}</div>
            </div>
          </React.Fragment>
        )}

      </section>

    )

}
