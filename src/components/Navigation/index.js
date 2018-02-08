import React from 'react'
import NavItem from '../../components/NavItem'
import LanguageSwitchContainer from '../../containers/LanguageSwitchContainer'
import './Navigation.css'

const Navigation = ({links, location, language}) => {

    links = links.map(link => <NavItem
        key={link.label.eng} 
        label={link.label[language]}
        url={link.url} 
        active={location.pathname === link.url}
    />)

    return (
        <div className="navigation">
            <div className="navigation__links-container">
                {links}
            </div>
            <LanguageSwitchContainer />
        </div>
    )
}

export default Navigation