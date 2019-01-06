/* Third Party */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

/* First Party */
import Searchbar from '../components/Searchbar' 

const githubToken = "access_token=c1c6964129310b0daa090a19c4dfdeedda2bd7b2";

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
                console.log('users: ', users)
            })
    }

    render () {
        const { 
            searchTerm 
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
            </Grid>
        )
    }

}