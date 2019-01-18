/* Third Party */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

import RepoCard from '../components/RepoCard'


export default class User extends Component {
    static getInitialProps({ pathname }) {
        return { pathname }
    }

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <h1> user test </h1>
        )
    }
}