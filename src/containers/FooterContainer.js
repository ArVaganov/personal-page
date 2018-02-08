import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({ language: state.language.name })

const FooterContainer = ({ language }) => {
    let footerData = {
        language,
        location: {
            eng: 'Sverdlova st. UFA, Russian Federation',
            rus: 'Российская Федерация, г. Уфа, ул. Свердлова'
        },
        contactExhortation: {
            eng: 'You can contact me via',
            rus: 'Контакты для связи',
        }
    }
    return (
        <Footer {...footerData}/>
    )
}

export default connect(mapStateToProps)(FooterContainer)