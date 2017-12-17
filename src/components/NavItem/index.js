import React from 'react'
import './NavItem.css'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const NavItem = (props) => <Link to={props.url} className={cx({ 'navigation__link_active': props.active }, { 'navigation__link': !props.active })}>
    {props.label}
</Link>


export default NavItem