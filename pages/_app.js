import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

class BuscoAMiMascota extends App {
  static async getInitialProps({Component, ctx}) {
    
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(BuscoAMiMascota);