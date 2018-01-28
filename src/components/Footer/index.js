import React from 'react'
import github from './github.svg'
import youtube from './youtube.svg'
import facebook from './facebook.svg'
import hackerrank from './hackerrank.svg'

import './Footer.css'

const Footer = () => {

    const images = [
        {imageLink: youtube, url: 'https://www.youtube.com/channel/UC6lQUFePlqv5Zx5P9VENO7A'},
        {imageLink: github, url: 'https://github.com/ArVaganov'},
        {imageLink: facebook, url: 'https://www.facebook.com/ar.vaganov'},
        {imageLink: hackerrank, url: 'https://www.hackerrank.com/ar_vaganov'},
    ]

    const imagesJsx = images.map(el => <a className="footer__social-link" key={el.url} href={el.url}>
        <img className="footer__social-image" src={el.imageLink} />
     </a>)

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__city">
                        {`Sverdlova st. UFA, Russian Federation. ${new Date().getFullYear()}`}
                    </div>
                    <div className="footer__social-container">
                        {imagesJsx}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer