import React from "react"
import Description from "./Description.jsx"
import axios from "axios";

export default class Chyp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // descriptions: []
    }
  }

  componentWillMount() {
    const _this = this;
    axios.get('https://google.ca')
      .then((response) => {
          _this.setState({
            descriptions: response.descriptions,
            text: ''
          })
      })
  }

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <h2>Test47</h2>
          {
            this.state.descriptions.map((description) => {
              return <Description description = {description}></Description>
            })

          }
      </div>
    )
  }
}
