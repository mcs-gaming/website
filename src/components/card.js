import React from 'react';
import mcsLogo from '../images/mcs-logo.png';

const Card = props => {
  console.log(props)
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={mcsLogo} alt="MCS Logo"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p className="mb-0">
              <strong>{props.gamerAlias}</strong>
            </p>
            <p className="mb-0">
              <small>{props.gamerRealName}</small>
            </p>
            <p className="mb-0">{props.gamerLocation}</p>
            <p className="mb-0">{props.gamerAge}</p>
            <p className="mb-0">{props.gamerQuote}</p>
            <p className="mb-0">{props.gamerSnack}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
