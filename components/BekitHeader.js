import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import BekitComponent from './BekitComponent'

export default class BekitHeader extends BekitComponent {

  render() {
    return <Layout.Header>Header</Layout.Header>
  }
}