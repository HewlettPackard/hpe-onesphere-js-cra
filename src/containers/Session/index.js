import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      error: '',
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState(
      { isLoading: true },
      () => {
        fetch('http://localhost:3001/api/session')
          .then(response => response.json())
          .then(json => this.setState({ data: json, isLoading: false }))
          .catch(error => this.setState({ error }))
      }
    );
  }
  render() {
    return this.props.render(this.state);
  }
}
