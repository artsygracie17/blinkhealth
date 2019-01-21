/* Third Party */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

/* First Party */
import Searchbar from '../components/Searchbar' 
import UserCard from '../components/UserCard'
import RepoCard from '../components/RepoCard'
import { 
    updateSearchTerm,
    populateUsers
} from '../redux/modules/store'


const githubToken = "access_token=c1c6964129310b0daa090a19c4dfdeedda2bd7b2";

const PaddedRow = styled(Row)`
    padding: 2rem 0rem;
`
const PaddedCol = styled(Col)`
    padding: 0rem 1.5rem;
`

class Home extends Component {

    static getInitialProps() {
        return
    }

    handleSearchbarSubmit = (searchTerm) => {
        console.log('in handlesubmit: ', searchTerm)
        let urlRequest = `https://api.github.com/search/users?q=${searchTerm}`
        fetch(urlRequest)
            .then(res => res.json())
            .then(results => {
                this.props.populateUsers(results.items)
            })
    }

    handleUserCardClick = (user) => {
        console.log('in handleUserCardClick: ', user)
        this.setState({
            currentUser: user
        })
        Router.push({
            pathname: '/user',
            query: { name: user.login}
        })
        // make api request to repo url
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
                <PaddedRow center='xs'>
                    <Col xs={12} sm={8} md={6}>
                        <Searchbar
                            searchTerm={searchTerm}
                            onChange={updateSearchTerm}
                            onSubmit={handleSearchbarSubmit}
                        />
                    </Col>
                </PaddedRow>
                <Row>
                    { users && users.map((user, i) => {
                        return (
                            <PaddedCol xs={6} sm={4} md={3} lg={2} key={i}>
                                <UserCard
                                    user={user}
                                    cardClick={() => handleUserCardClick(user) }
                                />
                            </PaddedCol>
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
        populateUsers: bindActionCreators(populateUsers, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)