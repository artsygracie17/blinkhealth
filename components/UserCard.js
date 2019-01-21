/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const UserCardContainer = styled.div`
    width: 100%;
    height: 13rem;
    margin: 3rem;
`

const UserCardBody = styled.div`
    width: 10rem;
    height: 100%;
`

const UserImg = styled.img`
    margin-bottom: 0.2rem;
    opacity: 1;
    width: 100%;
    height: 10rem;

    &:hover {
        cursor: pointer;
    }
`

const Username = styled.a`
    color: black;
    font-size: 1.3rem;
    padding: 1rem;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

`

export default class UserCard extends React.Component {
    render () {
        const { user, cardClick } = this.props
        const avatarUrl = user.avatar_url
        const username = user.login
        const userUrl = user.html_url
        const repoRequestUrl = user.repos_url

        return (
            <UserCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
                <UserCardBody> 
                    <UserImg src={avatarUrl} onClick={cardClick}></UserImg>
                    <Username href={userUrl} target='_blank'>{username}</Username>
                </UserCardBody>
            </UserCardContainer>
        )
    }
}

UserCard.defaultProps = {
    user: {},
    cardClick: () => {}
}

UserCard.propTypes = {
    user: PropTypes.object,
    cardClick: PropTypes.func
}