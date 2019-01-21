/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

const RepoCardContainer = styled.div`
    width: 40rem;
`

const RepoCardBody = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 1rem;
    padding-bottom: 0.5rem;
    width: 100%;
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
    color: black;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

`

const Label = styled.p`
    color: gray;
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
                    <Row>
                        <RepoName href={repoUrl} target='_blank'>{repoName}</RepoName>
                    </Row>
                    <Row>
                        <Col>
                            <Label> {issueCount} Pull Requests </Label>
                        </Col>
                        <Col>
                            <Label> {language} </Label>
                        </Col>
                    </Row>

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