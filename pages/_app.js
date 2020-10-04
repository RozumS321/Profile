import React from 'react';
import PropTypes from 'prop-types';
import reducersProfile from "../redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


const store = createStore(reducersProfile, applyMiddleware(thunk));


export default function MyApp(props) {
    const { Component, pageProps } = props;
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};