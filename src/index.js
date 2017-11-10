import React from 'react'
import ReactDOM from 'react-dom'
import BekitManager from './core/BekitManager'
import BekitProvider from './components/BekitProvider'
import Hits from './__test__/Hits'
import SearchBox from './__test__/SearchBox'

const translation = {
	bekit: {
		Search: '搜索'
	}
}
const bekit = new BekitManager('http://192.168.0.21:9400/_search')

ReactDOM.render(
	<BekitProvider bekit={bekit} translation={translation}>
		<SearchBox placeholder='Search' fields={['title']} />
		<Hits />
	</BekitProvider>,
	document.getElementById('root')
)

