import React from 'react'
import github from './github.svg'
import youtube from './youtube.svg'
import facebook from './facebook.svg'
import hackerrank from './hackerrank.svg'

import './Footer.css'

const Footer = ({ language, location, contactExhortation }) => {

    const images = [
        {imageLink: youtube, url: 'https://www.youtube.com/channel/UC6lQUFePlqv5Zx5P9VENO7A'},
        {imageLink: github, url: 'https://github.com/ArVaganov'},
        {imageLink: facebook, url: 'https://www.facebook.com/ar.vaganov'},
        {imageLink: hackerrank, url: 'https://www.hackerrank.com/ar_vaganov'},
    ]

    const imagesJsx = images.map(el => <a className="footer__social-link" key={el.url} href={el.url}>
        <img className="footer__social-image" src={el.imageLink} alt=""/>
     </a>)

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__city">
                        {`${location[language]}. ${new Date().getFullYear()}`}
                    </div>
                    <div className="footer__social-container">
                        {imagesJsx}
                    </div>
                </div>
                <div className="footer__contacts">
                    {contactExhortation[language]}<br />
                    E-mail: <a href="mailto:ar.vaganov@gmail.com">ar.vaganov@gmail.com</a><br />
                    LinkedIn: <a href="https://www.linkedin.com/in/aleksandr-vaganov-18842a13a/">https://www.linkedin.com/in/aleksandr-vaganov-18842a13a</a><br />
                    Telegram: <a href="t.me/ar_vaganov">t.me/ar_vaganov</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer