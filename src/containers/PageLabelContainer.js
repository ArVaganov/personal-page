import React from 'react'
import { connect } from 'react-redux'
import PageLabel from '../components/PageLabel'

const mapStateToProps = (state) => ({ language: state.language.name })

const PageLabelContainer = (props) => <PageLabel {...props}/>

export default connect(mapStateToProps)(PageLabelContainer)