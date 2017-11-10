import React from 'react'
import BekitSearchBox from '../components/BekitSearchBox'
import BekitQuery from '../api/BekitQuery'

export default class SearchBox extends BekitSearchBox {

	getElement() {
		const { fields, ...props } = this.props

		return <input type="text" onChange={e => this.onChange(e)} {...props} />
	}

	onChange(e) {
		this.performSearch(new BekitQuery(null, {
			multi_match: {
				fields: this.props.fields,
				query: e.target.value
			}
		}))
	}
}

