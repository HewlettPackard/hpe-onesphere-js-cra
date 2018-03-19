import { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: undefined,
      error: ''
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      fetch('http://localhost:3001/api/projects')
      .then(response => response.json())
      .then(json => this.setState({
        data: json,
        isLoading: false,
        error: ''
      }))
      .catch(error => this.setState({ error, isLoading: false }));
    });
  }
  render() {
    return this.props.render(this.state);
  }
}
