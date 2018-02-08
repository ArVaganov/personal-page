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
                eng: 'Skills',
                rus: 'Навыки',
            },
            url: '/skills', 
        },
        {
            label: {
                eng: 'About Me',
                rus: 'Обо мне',
            },
            url: '/about',
        },
        {
            label: {
                eng: 'Log',
                rus: 'Заметки',
            },
            url: '/log',
        }
    ]
    
    return (
        <Navigation links={links} location={location} language={language}/>
    )
}

export default connect(mapStateToProps)(NavigationContainer)