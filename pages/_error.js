import React from 'react'

export default class Error extends React.Component {

  render() {
    return <p>{this.props.statusCode}</p>
  }
}

