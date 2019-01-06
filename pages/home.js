/* Third Party */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

/* First Party */
import Searchbar from '../components/Searchbar' 
import UserCard from '../components/UserCard'

const githubToken = "access_token=c1c6964129310b0daa090a19c4dfdeedda2bd7b2";

const PaddedCol = styled(Col)`
    padding: 0rem 1.5rem;
`

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            users: [],
            currentUser: {}
        }
    }

    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSearchbarSubmit = (searchTerm) => {
        console.log('in handlesubmit: ', searchTerm)
        let urlRequest = `https://api.github.com/search/users?q=${searchTerm}`
        fetch(urlRequest)
            .then(res => res.json())
            .then(results => {
                const users = results.items
                this.setState({
                    users: users
                })
            })
    }

    render () {
        const { 
            searchTerm,
            users
        } = this.state
        const { 
            handleSearchTermChange,
            handleSearchbarSubmit
        } = this
        return (
            <Grid>
                <Row center='xs'>
                    <Col>
                        <Searchbar
                            searchTerm={searchTerm}
                            onChange={handleSearchTermChange}
                            onSubmit={handleSearchbarSubmit}
                        />
                    </Col>
                </Row>
                <Row>
                    { users.map((user, i) => {
                        console.log(user)
                        return (
                            <PaddedCol xs={6} sm={4} md={3} lg={2} key={i}>
                                <UserCard
                                    user={user}
                                />
                            </PaddedCol>
                        )
                    })}
                </Row>
            </Grid>
        )
    }

}