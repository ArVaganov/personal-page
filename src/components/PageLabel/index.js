import React from 'react'
import './PageLabel.css'

const PageLabel = (props) => {
    let { eng, ru, dark } = props
    return <h1 className={dark ? 'page__label_d' : 'page__label_l'}>{eng}</h1>
}

export default PageLabel