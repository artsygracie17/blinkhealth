/* Third Party */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'next/router'
import 'isomorphic-fetch'

import {
    populateRepos
} from '../redux/modules/store'
import RepoCard from '../components/RepoCard'


class User extends Component {

    static async getInitialProps({ store, pathname, asPath}) {
        const { currentUser } = store.getState()
        console.log(currentUser)
        // make repos api call here
        const urlRequest = currentUser.repos_url
        await fetch(urlRequest)
            .then(res => res.json())
            .then(repos => {
                store.dispatch(populateRepos(repos))
            })
        return { pathname, asPath }
    }

    render () {
        const {
            props
        } = this

        const {
            pathname,
            asPath,
            currentUser,
            repos
        } = props

        console.log('currentUser: ', currentUser)
        console.log('repos: ', repos)
        return (
            <Grid>
                    { repos && repos.map((repo, i) => {
                        return (
                            <Row>
                                <Col>
                                    <RepoCard
                                        repo={repo}
                                    />
                                </Col>
                            </Row>
                        )
                    })}
            </Grid>
        )
    }
}

export const mapStateToProps = (state) => {
    return { ...state }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        populateRepos: bindActionCreators(populateRepos, dispatch)
    }
}

export default connect(mapStateToProps)(User)