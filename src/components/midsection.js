import React from "react"
import { FaRocket } from "react-icons/fa"
import "./style.scss"
import Emoji from "./emoji"

const Midsection = () => (
  <div>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaRocket size="fa-2x" color="#d22780" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Topic #1</h1>
                  <p className="subtitle is-size-5">
                    Lucas ipsum dolor sit amet jinn kessel wedge twi'lek moff
                    kenobi windu luke skywalker aayla. Amidala mara solo ackbar
                    moff jade wedge mustafar solo. Wampa coruscant jade boba
                    hutt kessel anakin.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaRocket size="fa-2x" className="has-text-danger" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Topic #2</h1>
                  <p className="subtitle is-size-5">
                    Wookiee jabba hutt maul ben hutt lando tatooine padmé. Mace
                    calamari hutt darth hutt calrissian. Antilles lando organa
                    alderaan darth.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaRocket size="fa-2x" color="#5e227f" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Topic #3</h1>
                  <p className="subtitle is-size-5">
                    Wookiee jabba hutt maul ben hutt <code>lando</code> tatooine
                    padmé. Mace calamari hutt darth hutt calrissian. Antilles
                    lando organa alderaan darth.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaRocket size="fa-2x" color="blue" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Topic #4</h1>
                  <p className="subtitle is-size-5">
                    Wookiee jabba hutt maul ben hutt lando tatooine padmé. Mace
                    calamari hutt darth hutt calrissian. Antilles lando organa
                    alderaan darth.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaRocket size="fa-2x" className="has-text-primary" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Topic #5</h1>
                  <p className="subtitle is-size-5">
                    Wookiee jabba hutt maul ben hutt lando tatooine padmé. Mace
                    calamari hutt darth hutt calrissian. Antilles lando organa
                    alderaan darth.
                    <Emoji emoji="🤑" />
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaRocket size="fa-2x" className="has-text-danger" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Topic #6</h1>
                  <p className="subtitle is-size-5">
                    Wookiee jabba hutt maul ben hutt lando tatooine padmé. Mace
                    calamari hutt darth hutt calrissian. Antilles lando organa
                    alderaan darth.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Midsection
