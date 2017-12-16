import React from 'react'
import './Navigation.css'
import NavItem from '../../components/NavItem'

const Navigation = () => {
    let links = [
        { label: 'Skills', url: 'cv', active: true },
        { label: 'About Me', url: 'bio', active: false },
        { label: 'Portfolio', url: 'portfolio', active: false },
        { label: 'Blog', url: 'blog', active: false }
    ]

    links = links.map(link => <NavItem label={link.label} url={link.url} active={link.active}/>)
    return (
        <div className="navigation">
            {links}
        </div>
    )
}

export default Navigation