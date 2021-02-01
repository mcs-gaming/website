import React from 'react';

const CardOld = props => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Team Member Name Here</p>
            <p className="subtitle is-6">
              Position: Ramp Room - Age: 00
            </p>
          </div>
        </div>

        <div className="content">
          <p>
            Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Phasellus nec iaculis mauris.
          </p>
          <p>Age: 00</p>
          <p>Location: Somewhere, State</p>
          <p>Fav Snack: Cheerios</p>
          <p>Fav Quote: get ownt.</p>
          <p>
            Member since: &nbsp;
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </p>
          <a href="#" className="tag">
            #diabotical
          </a>{' '}
          <a href="#" className="tag mb-4">
            #WoW
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOld;
