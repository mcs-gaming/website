import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import Layout from '../components/layout';

const ContactPage = () => { 
  return (
  <Layout>
        <h2 className="title has-text-centered mb-6">
          Contact the Mocu Gaming Squad
        </h2>
        <div className="columns">
          <div className="column is-6">
            <h4 className="title is-spaced is-4">
              Let's talk about the future of PC gaming
            </h4>
            <p className="subtitle">
              My money's in that office, right? If she start giving me
              some bullshit about it ain't there...
            </p>
            <div>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-24x24">
                    <span className="icon">
                      <a href="/">
                        <FaDiscord size="fa-2x" />
                      </a>
                    </span>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>Hangout with us on Discord</p>
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-24x24">
                    <span className="icon">
                      <a href="/">
                        <FaInstagramSquare size="fa-2x" />
                      </a>
                    </span>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>Follow us on Instagram</p>
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-24x24">
                    <span className="icon">
                      <a href="/">
                        <FaTwitterSquare size="fa-2x" />
                      </a>
                    </span>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>Tweet us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-5 is-offset-1">
            <form>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    rows="5"
                    placeholder="Write something..."
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-dark is-fullwidth"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
  </Layout>
)};
export default ContactPage;
