import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Manager from '../core/Manager'

@observer class Component extends React.Component {

  static contextTypes = {
    bekit: PropTypes.instanceOf(Manager)
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

export default Component
