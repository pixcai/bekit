import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import BekitManager from '../core/BekitManager'

export default class BekitProvider extends React.Component {

  static childContextTypes = {
    bekit: PropTypes.instanceOf(BekitManager).isRequired
  }

  getChildContext() {
    return {
      bekit: this.props.bekit
    }
  }

  render() {
    const { bekit, className, children, ...others } = this.props

    return (
      <Provider {...others}>
        <div className={className}>{children}</div>
      </Provider>
    )
  }
}