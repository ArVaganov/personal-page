import React from 'react'
import cx from 'classnames'

const LanguageSwitch = ({ language }) => {
    console.log(cx);
    return (
        <div className="navigation__language">
            <span className={cx({navigation__language_active: language === 'en'})}>EN </span>
                / 
                <span className={cx({navigation__language_active: language === 'ru'})}> RU</span>
        </div>
    )
}

export default LanguageSwitch