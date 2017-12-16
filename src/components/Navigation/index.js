import React from 'react'
import './Navigation.css'
import NavItem from '../../components/NavItem'

const Navigation = () => {
    let links = [
        { label: 'Skills', url: 'cv', active: true },
        { label: 'About Me', url: 'bio' },
        { label: 'Portfolio', url: 'portfolio' },
        { label: 'Blog', url: 'blog' }
    ]

    links = links.map(link => <NavItem label={link.label} url={link.url} active={link.active} />)
    return (
        <div className="navigation">
            {links}
        </div>
    )
}

export default Navigation