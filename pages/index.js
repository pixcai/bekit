import React from 'react'
import { action } from 'mobx'
import Component from 'components/Component'

export default class Index extends Component {

  render() {
    return <button onClick={this.onClick}>Hello</button>
  }

  @action.bound onClick() {
    console.log('hello world')
  }
}
