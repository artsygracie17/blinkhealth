/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const UserCardContainer = styled.div`
    width: 100%;
    height: 12rem;
    margin: 2rem;
`

const UserCardBody = styled.div`
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    padding: 0rem;
    width: 100%;
    height: 100%;
`

const UserImg = styled.img`
    border-radius: 0.2rem 0.2rem 0rem 0rem;
    opacity: 1;
    width: 100%;
    height: 10rem;

    &:hover {
        cursor: pointer;
    }
`

const Username = styled.a`
    color: gray;
    padding: 1rem;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

`

export default class UserCard extends React.Component {
    render () {
        const { user } = this.props
        const avatarUrl = user.avatar_url
        const username = user.login
        const userUrl = user.html_url
        const repoRequestUrl = user.repos_url

        console.log('user: ', user)

        return (
            <UserCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
                <UserCardBody> 
                    <UserImg src={avatarUrl}></UserImg>
                    <Username href={userUrl} target='_blank'>{username}</Username>
                </UserCardBody>
            </UserCardContainer>
        )
    }
}

UserCard.defaultProps = {
    user: {}
}

UserCard.propTypes = {
    user: PropTypes.object
}