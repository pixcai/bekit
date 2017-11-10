import get from 'lodash-es/get'
import merge from 'lodash-es/merge'
import toPath from 'lodash-es/toPath'
import defaults from 'lodash-es/defaults'
import isObject from 'lodash-es/isObject'
import cloneDeep from 'lodash-es/cloneDeep'
import BekitEventEmitter from './BekitEventEmitter'
import BekitRequest from './BekitRequest'
import BekitAccessor from '../api/BekitAccessor'

export default class BekitManager extends BekitEventEmitter {
	
	result = {}
	translation = {}

	constructor(baseURL, options = {}) {
		super()
		this.options = defaults(options, {
			baseURL,
			timeout: 10000,
			searchOnLoad: true
		})
		this.request = new BekitRequest(this.options)
		this.accessor = new BekitAccessor(this)
	}

	setResult(result) {
		this.result = result
		this.accessor.onChange(result)
		this.emit(BekitManager.EVT_SET_RESULT, result)
	}

	getQuery() {
		return this.accessor.toPlainObject()
	}

	addQuery(query) {
		return this.accessor.add(query)
	}

	removeQuery(query) {
		return this.accessor.remove(query)
	}

	search(query) {
		if (query instanceof BekitAccessor) {
			query = query.toPlainObject()
		} else {
			query = null
		}

		return this.post(null, merge(this.getQuery(), query))
	}

	post(url, data) {
		return this.request.post(url, data)
			.then(data => this.setResult(data))
			.catch(error => console.error(error))
	}

	put(url, data) {
		return this.request.put(url, data)
			.catch(error => console.error(error))
	}

	delete(url) {
		return this.request.delete(url)
			.catch(error => console.error(error))
	}

	head(url) {
		return this.request.head(url)
			.catch(error => console.error(error))
	}

	get(url) {
		return this.request.get(url)
			.then(data => this.setResult(data))
			.catch(error => console.error(error))
	}

	translate(text, path) {
		return get(this.translation, path ? toPath(path).concat(text) : text, text)
	}

	setTranslation(translation) {
		if (isObject(translation)) {
			this.translation = cloneDeep(translation)
			this.emit(BekitManager.EVT_SET_TRANSLATION, translation)
		}
	}
}

BekitManager.EVT_SET_RESULT = Symbol('EVT_SET_RESULT')
BekitManager.EVT_SET_TRANSLATION = Symbol('EVT_SET_TRANSLATION')

