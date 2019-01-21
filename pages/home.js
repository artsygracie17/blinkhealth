/* Third Party */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'next/router'

/* First Party */
import Searchbar from '../components/Searchbar' 
import UserCard from '../components/UserCard'
import { 
    updateSearchTerm,
    populateUsers,
    populateCurrentUser
} from '../redux/modules/store'


const githubToken = "access_token=c1c6964129310b0daa090a19c4dfdeedda2bd7b2";

const PaddedRow = styled(Row)`
    padding-top: 2rem;
    padding-bottom: 0rem;
`

const Title = styled.p`
    font-size: 2.5rem;
    margin-bottom: 0.6rem;
`

class Home extends Component {

    handleSearchbarSubmit = (searchTerm) => {
        let urlRequest = `https://api.github.com/search/users?q=${searchTerm}`
        fetch(urlRequest)
            .then(res => res.json())
            .then(results => {
                this.props.populateUsers(results.items)
            })
    }

    handleUserCardClick = (user) => {
        this.props.populateCurrentUser(user)
        Router.push({
            pathname: '/user'
        })
    }

    render () {
        const { 
            handleSearchbarSubmit,
            handleUserCardClick,
            props
        } = this

        const {
            searchTerm,
            users,
            updateSearchTerm
        } = props

        return (
            <Grid>
                <PaddedRow start='xs'>
                    <Col>
                        <Title> Github User Search </Title>
                    </Col>
                </PaddedRow>
                <Row start='xs'>
                    <Col xs={12} sm={8} md={6}>
                        <Searchbar
                            searchTerm={searchTerm}
                            onChange={updateSearchTerm}
                            onSubmit={handleSearchbarSubmit}
                        />
                    </Col>
                </Row>
                <Row>
                    { users && users.map((user, i) => {
                        return (
                            <Col xs={6} sm={4} md={3} lg={2} key={i}>
                                <UserCard
                                    user={user}
                                    cardClick={() => handleUserCardClick(user) }
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Grid>
        )
    }

}

export const mapStateToProps = (state) => {
    return { ...state }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchTerm: bindActionCreators(updateSearchTerm, dispatch),
        populateUsers: bindActionCreators(populateUsers, dispatch),
        populateCurrentUser: bindActionCreators(populateCurrentUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)