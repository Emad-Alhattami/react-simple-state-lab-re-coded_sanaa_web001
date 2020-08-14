import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
<<<<<<< HEAD
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    })
=======
    super()
    this.state = {
      color: props.value
    }
  }

  handleClick() {
    this.setState({
      color: '#333'
    });
>>>>>>> 86e2e6c5bb3049fc033f105a90f926112cf5f2d7
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
<<<<<<< HEAD
        onClick={this.handleClick}>
=======
        onClick={() => this.handleClick()}>
>>>>>>> 86e2e6c5bb3049fc033f105a90f926112cf5f2d7
      </div>
    )
  }

}
