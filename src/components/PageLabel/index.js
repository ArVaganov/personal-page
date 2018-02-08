import React from 'react'
import './PageLabel.css'

const PageLabel = (props) => {
    let { text, language, size } = props
    switch(size) {
        case 'sm': return <h4 className='page__label_l'>{text[language]}</h4>;
        case 'md': return <h3 className='page__label_l'>{text[language]}</h3>;
        case 'lg': return <h1 className='page__label_l'>{text[language]}</h1>;
        default: return <h1 className='page__label_l'>{text[language]}</h1>;
    }
}

export default PageLabel