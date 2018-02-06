import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStateToProps = ({ language: { name } }) => (
    { language: name }
)

const NavigationContainer = ({ language, location }) => {
    let links = [
        { 
            label: {
                en: 'Skills',
                ru: 'Навыки',
            },
            url: '/skills', 
        },
        {
            label: {
                en: 'About Me',
                ru: 'Обо мне',
            },
            url: '/about',
        },
        {
            label: {
                en: 'Log',
                ru: 'Заметки',
            },
            url: '/log',
        }
    ]
    
    return (
        <Navigation links={links} location={location} language={language}/>
    )
}

export default connect(mapStateToProps)(NavigationContainer)