import React, { Component } from 'react';

import './Body.css';
import { Icon } from '../Icon/Icon';

export class Body extends Component {

  render() {
    return (
      <main className="main">
        {this.props.content}

        {/*<section className="chat">
          <div className="chat__left">
            <div className="avatar avatar--online">
              <div className="avatar__img">
                <img src="http://via.placeholder.com/350x150" alt="name"/>
              </div>
            </div>
          </div>
          <div className="chat__right">
            <div className="chat__name">Джеймс МакЭвой</div>
            <div className="chat__msg">Привет! Подскажи пожалуйста хороши фильм</div>
            <div className="chat__time">10:27</div>
          </div>
        </section>
        <section className="chat">
          <div className="chat__left">
            <div className="avatar">
              <div className="avatar__img">
                <img src="http://via.placeholder.com/350x150" alt="name"/>
              </div>
            </div>
          </div>
          <div className="chat__right">
            <div className="chat__name">Джеймс МакЭвой</div>
            <div className="chat__msg">Привет! Подскажи пожалуйста хороши фильм</div>
            <div className="chat__time">10:27</div>
          </div>
        </section>
        <section className="chat chat--group">
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
        </section>
        <section className="chat">
          <div className="chat__left">
            <div className="avatar">
              <div className="avatar__img">
                <img src="http://via.placeholder.com/350x150" alt="name"/>
              </div>
            </div>
          </div>
          <div className="chat__right">
            <div className="chat__name">Джеймс МакЭвой</div>
            <div className="chat__msg">Привет! Подскажи пожалуйста хороши фильм</div>
            <div className="chat__time">Чтв</div>
          </div>
        </section>*/}

      </main>
    );
  }
}
