import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
            discord
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-6'>
            © 2021 MCS Team
          </p>
          <article className='media center'>
            <span className='icon'>
              <a href={data.site.siteMetadata.discord}>
                <FaDiscord size='fa-2x' color='#7289da'/>
              </a>
            </span>
          </article>
        </div>
      </footer>
    )}
  />
)

export default Footer
