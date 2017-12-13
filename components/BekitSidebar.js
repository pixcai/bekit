import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import BekitComponent from './BekitComponent'

class BekitSidebar extends BekitComponent {

  @observable collapsed = false

  render() {
    return (
      <Layout.Sider collapsible collapsed={this.collapsed} onCollapse={this.onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
        </Menu>
      </Layout.Sider>
    )
  }

  @action.bound onCollapse(collapsed) {
    this.collapsed = collapsed
  }
}

export default observer(BekitSidebar)