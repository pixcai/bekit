import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import Component from './Component'

export default class Sidebar extends Component {

  @observable collapsed = false

  render() {
    return (
      <Layout.Sider
        style={{ minHeight: '100vh' }}
        collapsible
        collapsed={this.collapsed}
        onCollapse={this.onCollapse}>
        <Menu theme="dark" mode="inline">
        </Menu>
      </Layout.Sider>
    )
  }

  @action.bound onCollapse(collapsed) {
    console.log(collapsed)
    this.collapsed = collapsed
  }
}

