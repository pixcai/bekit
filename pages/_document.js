import Document, {
  Head,
  Main,
  NextScript
} from 'next/document'
import { Layout } from 'antd'
import elasticsearch from 'elasticsearch'
import BekitManager from '../core/BekitManager'
import BekitProvider from '../components/BekitProvider'
import BekitSidebar from '../components/BekitSidebar'
import BekitHeader from '../components/BekitHeader'
import BekitFooter from '../components/BekitFooter'
import antdStyle from '../node_modules/antd/dist/antd.min.css'

export default class GlobalDocument extends Document {

  constructor(props) {
    super(props)
    this.bekit = new BekitManager(new elasticsearch.Client({
      host: process.env.ES_HOST
    }))
  }

  render() {
    return (
      <html lang={process.env.LANGUAGE}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
          <link rel="shortcut icon" type="images/x-icon" href="/static/favicon.png" />
          <style>{antdStyle}</style>
        </Head>
        <body>
          <BekitProvider bekit={this.bekit} className="jsx-bekit">
            <Layout className="ant-layout-has-sider">
              <BekitSidebar />
              <Layout>
                <BekitHeader />
                <Layout.Content>
                  <Main />
                </Layout.Content>
              </Layout>
            </Layout>
          </BekitProvider>
          <NextScript />
        </body>
      </html>
    )
  }
}