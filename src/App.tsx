import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as TodoActions from './action';
import { bindActionCreators } from 'redux';
import SubComponent from './SubComponent';

export interface AppProps extends React.Props<any> {
  removeTodo: (text: string) => void,
  todo: {
    text: string
  }
}

interface LocalProps extends React.Props<any> {
  addTodo: (text: string) => void
}

class App extends Component<AppProps & LocalProps, any> {

  constructor (props: any) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            onClick={() => this.props.addTodo('test')}
            target="_blank"
            rel="noopener noreferrer"
          >
          Click HERE to ADD 
          </a>
          <SubComponent removeTodo={this.props.removeTodo} todo={this.props.todo} />
        </header>
      </div>
    );
  }
}

const mapStateToProps: {} = (state: any) => {
  return {
    something: state.something,
    todo: state.todo
  }
}

// const mapDispatchToProps: {} = (dispatch: any) => {
//   return {
//     addTodo: (text: string) => dispatch(TodoActions.addTodo(text)),
//     removeTodo: (id: string) => dispatch(TodoActions.removeTodo(id))
//   }
// }

const mapDispatchToProps: {} = (dispatch: any) => bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
