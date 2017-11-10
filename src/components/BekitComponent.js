import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash-es/get'
import noop from 'lodash-es/noop'
import isString from 'lodash-es/isString'
import snakeCase from 'lodash-es/snakeCase'
import BekitManager from '../core/BekitManager'

export default class BekitComponent extends React.Component {

	static contextTypes = {
		bekit: PropTypes.instanceOf(BekitManager).isRequired
	}

	uuid = Math.random().toString(16).substr(2)

	constructor(props) {
		super(props)
		const componentWillMount = this.componentWillMount
		this.componentWillMount = () => {
			this.bekit.addQuery(this.getQuery())
			if (componentWillMount) {
				componentWillMount.call(this)
			}
		}
	}

	get bekit() {
		return this.context.bekit
	}

	getQuery() {
		return null
	}

	getElement() {
		return null
	}

	render() {
		return this.getElement()
	}

	search(query) {
		return this.bekit.search(query)
	}

	post(url, data) {
		return this.bekit.post(url, data)
	}

	put(url, data) {
		return this.bekit.put(url, data)
	}

	delete(url) {
		return this.bekit.delete(url)
	}

	head(url) {
		return this.bekit.head(url)
	}

	get(url) {
		return this.bekit.get(url)
	}

	setNamespace(ns) {
		if (isString(ns)) {
			this._ns = ns
			this.bekit.emit(BekitComponent.EVT_SET_NAMESPACE, ns)
		}
	}

	getNamespace() {
		return this._ns || snakeCase(this.constructor.name).split('_')[0]
	}

	T(text) {
		return this.bekit.translate(text, this.getNamespace())
	}

	getHits() {
		if (get(this.bekit, `result.found`, false)) {
			return [this.bekit.result]
		}

		return get(this.bekit, `result.hits.hits`, [])
	}

	getBuckets(name = this.uuid) {
		return get(this.bekit, `result.aggregations.${name}.buckets`, [])
	}
}

BekitComponent.EVT_SET_NAMESPACE = Symbol('EVT_SET_NAMESPACE')

