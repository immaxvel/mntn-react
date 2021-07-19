import React from 'react'
import './FooterLeft.css'

const FooterLeft = () => {
    return (
        <div className="footer-left-side">
          <div className="footer-title">
            <a href="#header">MNTN</a>
          </div>
          <div className="footer-info">
            Get out there & discover your next
            <br />
            slope, mountain & destination!
          </div>
          <div className="footer-social">
            <p className="footer-follow">Follow Us</p>
            <div className="footer-icons">
              <a href="https://www.instagram.com/?hl=ru" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/?lang=ru" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            Copyright 2019 MNTN, Inc. Terms & Privacy
          </div>
        </div>
    )
}

export default FooterLeft
