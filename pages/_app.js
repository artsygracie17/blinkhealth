import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";

import {makeStore} from '../redux/modules/store'
import Home from '../pages/home'

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps 
            ? await Component.getInitialProps(ctx) 
            : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        console.log('app store: ', store)
        console.log('pageprops: ', pageProps)
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);