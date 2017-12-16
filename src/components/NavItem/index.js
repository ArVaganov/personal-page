import React from 'react'
import './NavItem.css'
import cx from 'classnames'

const NavItem = (props) => {
    return (
        <a className={cx({'navigation__link_active': props.active}, {'navigation__link': !props.active})} href={props.url}>{props.label}</a>
    )
}

export default NavItem