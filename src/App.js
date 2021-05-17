import React from 'react';
import { Provider, connect } from 'react-redux';
import { store } from './store';
import { addMessage } from './messages/types';
import DisplayMessages from './components/DisplayMessages';

const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayMessages);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MessagesContainer />
      </Provider>
    );
  }
}
