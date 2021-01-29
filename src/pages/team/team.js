import React from 'react';
// import '../styles/debug.scss';
import '../../components/style.scss';
import Card from '../../components/card';

const TeamPage = () => (
  <section className="section">
    <div className="container">
      <div className="has-text-centered">
        <h2 className="title is-2">The Team</h2>
        <h3 className="subtitle is-4 mb-6">We the legit squad.</h3>
      </div>
      {/* Grid of 3x3 for team bios */}
      {/* Row 1 */}
      <div className="columns">
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </div>
      {/* Row 2 */}
      <div className="columns">
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </div>
    </div>
  </section>
);
export default TeamPage;
