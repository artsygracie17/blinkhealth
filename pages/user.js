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


const PaddedRow = styled(Row)`
    border-bottom: 1px solid rgba(205, 205, 205, 0.5);
    padding-top: 4rem;
    margin-bottom: 2rem;
`

const PaddedCol = styled(Col)`
    margin-left: 3rem;
`

const UserImg = styled.img`
    border-radius: 0.2rem;
    height: 10rem;
    opacity: 1;
`

const Username = styled.p`
    color: black;
    font-size: 2.4rem;
    margin: 1rem;
    margin-top: 2.5rem;
    margin-bottom: 0.3rem;
`

const RepoCount = styled(Username)`
    color: gray;
    font-size: 1.4rem;
    margin: 1rem;
    margin-top: 0.2rem;

`

class User extends Component {

    static async getInitialProps({ store, pathname, asPath}) {
        const { currentUser } = store.getState()
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

        const avatarUrl = currentUser.avatar_url
        const username = currentUser.login
        return (
            <Grid>
                <PaddedRow start='xs'>
                    <Col>
                        <UserImg src={avatarUrl} />
                    </Col>

                    <Col>
                        <Username> {username} </Username>
                        <RepoCount> {repos.length} Repositories </RepoCount>
                    </Col>
                </PaddedRow>
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