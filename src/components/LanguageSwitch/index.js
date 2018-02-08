import React from 'react'
import cx from 'classnames'
import './LanguageSwitch.css'

const LanguageSwitch = ({ currentLanguage, setLanguage }) => {
    return (
        <div className="navigation__language">
            <span 
                className={cx('navigation__language-span', {navigation__language_active: currentLanguage === 'eng'})}
                onClick={() => setLanguage('eng')}
            >
                ENG
            </span>
            <span 
                className={cx('navigation__language-span', {navigation__language_active: currentLanguage === 'rus'})}
                onClick={() => setLanguage('rus')}
            > 
                RUS
            </span>
        </div>
    )
}

export default LanguageSwitch