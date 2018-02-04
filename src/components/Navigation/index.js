import React from 'react'
import LanguageSwitchContainer from '../../containers/LanguageSwitchContainer'
import './Navigation.css'
import NavItem from '../../components/NavItem'

const Navigation = (props) => {
    let links = [
        { label: 'Skills', url: '/skills' },
        { label: 'About Me', url: '/about' },
        { label: 'Personal Log', url: '/log' }
    ]

    links = links.map(link => <NavItem label={link.label} url={link.url} active={props.location.pathname === link.url} key={link.label} />)

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