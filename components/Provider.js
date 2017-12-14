import React from 'react'
import PropTypes from 'prop-types'
import { Provider as MobxProvider } from 'mobx-react'
import Manager from '../core/Manager'

export default class Provider extends React.Component {

  static childContextTypes = {
    bekit: PropTypes.instanceOf(Manager).isRequired
  }

  getChildContext() {
    return {
      bekit: this.props.bekit
    }
  }

  render() {
    const { bekit, className, children, ...others } = this.props

    return (
      <MobxProvider {...others}>
        <div className={className}>{children}</div>
      </MobxProvider>
    )
  }
}
