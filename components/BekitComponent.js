import React from 'react'
import PropTypes from 'prop-types'
import BekitManager from '../core/BekitManager'

export default class BekitComponent extends React.Component {

  static contextTypes = {
    bekit: PropTypes.instanceOf(BekitManager)
  }

  get bekit() {
    return this.props.bekit || this.context.bekit
  }

  get owner() {
    return this.bekit.owner
  }

  get store() {
    return this.bekit.store
  }
}