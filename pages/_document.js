import Document, { Head, Main, NextScript } from 'next/document'
import { Layout } from 'antd'
import elasticsearch from 'elasticsearch'
import Manager from 'core/Manager'
import Provider from 'components/Provider'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import styles from 'css/styles.less'

export default class GlobalDocument extends Document {

  constructor(props) {
    super(props)
    this.bekit = new Manager(new elasticsearch.Client({
      host: process.env.BEKIT_ES_HOST
    }))
  }

  render() {
    return (
      <html lang={process.env.LANGUAGE}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
          <link rel="shortcut icon" type="images/x-icon" href="/static/favicon.png" />
          <style>{styles}</style>
        </Head>
        <body>
          <Provider bekit={this.bekit}>
            <Header />
            <Layout className="ant-layout-has-sider">
              <Sidebar />
              <Layout.Content>
                <Main />
              </Layout.Content>
            </Layout>
          </Provider>
          <NextScript />
        </body>
      </html>
    )
  }
}

