/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

const blue = '#4285f4'

const RepoCardContainer = styled.div`
    width: 40rem;
`

const RepoCardBody = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 1rem;
    padding-bottom: 0.5rem;
    width: 100%;
`

const RepoName = styled.a`
    color: ${blue};
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

    pluralize = (word, count) => {
        return count===1 ? word : `${word}s`
    }

    render () {
        const {
            props,
            pluralize 
        } = this
        const { 
            repo 
        } = props

        const repoName = repo.name
        const repoUrl = repo.html_url
        const language = repo.language
        const issueCount = repo.open_issues_count


        return (
            <RepoCardContainer>
                <RepoCardBody> 
                    <Row>
                        <RepoName href={repoUrl} target='_blank'>{repoName}</RepoName>
                    </Row>
                    <Row>
                        <Col>
                            <Label> {issueCount} {pluralize('Pull Request', issueCount)} </Label>
                        </Col>
                        { language && 
                        <Col>
                            <p> • </p>
                        </Col>
                        }
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