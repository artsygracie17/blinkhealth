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

const RepoName = styled.a`
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
        const repoName = repo.name
        const repoUrl = repo.html_url
        const language = repo.language
        const issueCount = repo.open_issues_count

        console.log('repo: ', repo)

        return (
            <RepoCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
                <RepoCardBody> 
                    <RepoName href={repoUrl} target='_blank'>{repoName}</RepoName>
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