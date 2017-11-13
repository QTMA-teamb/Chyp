import React, { Component } from 'react';
import './Events.css';
import axios from 'axios';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    const _this = this;
    axios.get('http://localhost:3030/api/events')
      .then((response) => {
          _this.setState({data: response.data})
      })
      .catch(console.error)
  }
  render() {
    console.log(this.state.data)
    let rows = this.state.data.map(person => {
      return <PersonRow key = {
        person.id
      }
      data = {
        person
      }

      />
    })
    return <table >
      < tbody > {
        rows
      } < /tbody> < /table>
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>
        { props.data.id }
      </td>
      <td>
        { props.data.name }
      </td>
      <td id = "host">
        { props.data.host }
      </td>
      <td>
        { props.data.date }
      </td>

    </tr>
  );
}

export default Home;
