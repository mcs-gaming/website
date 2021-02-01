import React from 'react';
import mcsLogo from '../images/mcs-logo.png';
import { FaDiscord } from 'react-icons/fa';

const Card = props => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={mcsLogo} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Game Alias</strong>
            </p>
            <p>
              <small>Real Name?</small>
            </p>
            <p className="icon">
              <a href="#">
                <FaDiscord size="fa-2x" color="#7289da" />
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
