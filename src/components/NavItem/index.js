import React from 'react'
import './NavItem.css'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const NavItem = (props) => <div className="navigation__link-container">
    <Link to={props.url} className={cx({ 'navigation__link_active': props.active }, { 'navigation__link': !props.active })}>
        {props.label}
    </Link>
    <i className="navigation__link-underline"/>
</div>


export default NavItem