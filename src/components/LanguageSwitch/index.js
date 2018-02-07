import React from 'react'
import cx from 'classnames'
import './LanguageSwitch.css'

const LanguageSwitch = ({ currentLanguage, setLanguage }) => {
    return (
        <div className="navigation__language">
            <span 
                className={cx('navigation__language-span', {navigation__language_active: currentLanguage === 'en'})}
                onClick={() => setLanguage('en')}
            >
                EN
            </span>
            <span 
                className={cx('navigation__language-span', {navigation__language_active: currentLanguage === 'ru'})}
                onClick={() => setLanguage('ru')}
            > 
                RU
            </span>
        </div>
    )
}

export default LanguageSwitch