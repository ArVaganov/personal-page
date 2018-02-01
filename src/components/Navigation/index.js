import React from 'react'
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
            {links}
        </div>
    )
}

export default Navigation