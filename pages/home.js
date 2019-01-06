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
            results: []
        }
    }

    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render () {
        const { searchTerm } = this.state
        const { handleSearchTermChange } = this
        return (
            <Grid>
                <Row center='xs'>
                    <Col>
                        <Searchbar
                            searchTerm={searchTerm}
                            onChange={handleSearchTermChange}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }

}