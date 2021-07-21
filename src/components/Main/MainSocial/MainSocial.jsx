import React from 'react'
import './MainSocial.css'

const MainSocial = () => {
    return (
        <div className="social">
        <p className="follow">Follow Us</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/?hl=ru" rel="noreferrer" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/?lang=ru" rel="noreferrer" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    )
}

export default MainSocial
