/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const RepoCardContainer = styled.div`
    width: 100%;
    height: 12rem;
    margin: 2rem;
`

const RepoCardBody = styled.div`
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    padding: 0rem;
    width: 100%;
    height: 100%;
`

const RepoImg = styled.img`
    border-radius: 0.2rem 0.2rem 0rem 0rem;
    opacity: 1;
    width: 100%;
    height: 10rem;

    &:hover {
        cursor: pointer;
    }
`

const Reponame = styled.a`
    color: gray;
    padding: 1rem;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

`

export default class RepoCard extends React.Component {
    render () {
        const { repo } = this.props
        const avatarUrl = repo.avatar_url
        const reponame = repo.login
        const repoUrl = repo.html_url
        const repoRequestUrl = Repo.repos_url

        console.log('Repo: ', Repo)

        return (
            <RepoCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
                <RepoCardBody> 
                    <RepoImg src={avatarUrl}></RepoImg>
                    <Reponame href={repoUrl} target='_blank'>{reponame}</Reponame>
                </RepoCardBody>
            </RepoCardContainer>
        )
    }
}

RepoCard.defaultProps = {
    repo: {}
}

RepoCard.propTypes = {
    repo: PropTypes.object
}