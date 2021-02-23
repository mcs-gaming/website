import React from 'react';
// import '../styles/debug.scss';
import '../../components/style.scss';
import Card from '../../components/card';
import Layout from '../../components/layout';

const TeamDiabotical = () => (
  <Layout>
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
          <Card gamerAlias="Relapse" gamerRealName="Justin" gamerAge="33" gamerLocation="Vancouver, Canada" gamerSnack="Sour Candy" gamerQuote="It's all about setting your bar right, you're more likely to trip over mine than hit your head."/>
        </div>
        <div className="column">
          <Card gamerAlias="Force" gamerRealName="Kenny" gamerAge="32" gamerLocation="Houston, TX" gamerSnack="Cheese dip" gamerQuote="If you're not 1st you're last"/>
        </div>
        <div className="column">
          <Card gamerAlias="Azurite" gamerRealName="Oliver" gamerAge="28" gamerLocation="Houston, TX" gamerSnack="Pho" gamerQuote="mm pho"/>
        </div>
      </div>
      {/* Row 2 */}
      <div className="columns">
        <div className="column">
          <Card gamerAlias="erebux" gamerRealName="Justin" gamerAge="30" gamerLocation="Vernon, CT" gamerSnack="peanut butter" gamerQuote="0-2 drop"/>
        </div>
        <div className="column">
          <Card gamerAlias="ease.5000" gamerRealName="Paul" gamerAge="38" gamerLocation="Richmond, VA" gamerSnack="KIND bars" gamerQuote="'Society teaches us that having feelings and crying is bad and wrong. Well, that's baloney, because grief isn't wrong. There's such a thing as good grief. Just ask Charlie Brown.' - Michael Scott"/>
        </div>
        <div className="column">
        <Card gamerAlias="demex" gamerRealName="Joel" gamerAge="33" gamerLocation="Miami, FL" gamerSnack="" gamerQuote=""/>
        </div>
      </div>

      {/* Row 3 */}
      <div className="columns">
        <div className="column">
          <Card gamerAlias="ruke" gamerRealName="Kevin" gamerAge="Also Yoked" gamerLocation="OH" gamerSnack="Enemy Teams." gamerQuote="Without order nothing exists, without chaos nothing evolves."/>
        </div>
        <div className="column">
          <Card gamerAlias="qmazer" gamerRealName="" gamerAge="32" gamerLocation="Seattle, WA" gamerSnack="Pho. Its a snack." gamerQuote=""/>
        </div>
        <div className="column">
        <Card gamerAlias="lich" gamerRealName="Kyle" gamerAge="30" gamerLocation="Fresno, CA" gamerSnack="The edible kind?" gamerQuote="'prime lich' - raul"/>
        </div>
      </div>

      {/* Row 4 */}
      <div className="columns">
        <div className="column">
          <Card gamerAlias="Đelusive" gamerRealName="Crystal" gamerAge="32" gamerLocation="Tremont, PA" gamerSnack="Chocolate chip cookies" gamerQuote="'Wish you weren't so fucking awkward bud.' - Wayne: Letterkenny"/>
        </div>
        <div className="column">
          <Card gamerAlias="festiveturtle" gamerRealName="Jenny" gamerAge="22" gamerLocation="Newark, CA" gamerSnack="Taco bell" gamerQuote="'your lg is nothink on the lan' -cooller"/>
        </div>

      </div>

    </div>
  </section>
  </Layout>
);
export default TeamDiabotical;
