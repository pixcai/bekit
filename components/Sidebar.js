import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import Component from './Component'

const { Sider } = Layout

export default class Sidebar extends Component {

  @observable collapsed = false

  render() {
    return (
      <Sider
        style={{ minHeight: '100vh' }}
        collapsible
        collapsed={this.collapsed}
        onCollapse={this.onCollapse}>
        <Menu theme="dark" mode="inline">
        </Menu>
      </Sider>
    )
  }

  @action.bound onCollapse(collapsed) {
    this.collapsed = collapsed
  }
}

