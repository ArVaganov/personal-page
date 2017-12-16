import React from 'react'
import './NavItem.css'
import cx from 'classnames'

const NavItem = (props) => {
    return (
        <div className="navigation__item">
            <a className={cx('navigation__link', {'navigation__link_active': props.active})} href={props.url}>{props.label}</a>
        </div>
    )
}

export default NavItem