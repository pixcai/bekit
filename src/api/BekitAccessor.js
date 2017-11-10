import React from 'react'
import get from 'lodash-es/get'
import merge from 'lodash-es/merge'
import cloneDeep from 'lodash-es/cloneDeep'

export default class BekitAccessor {

	accessors = new Set()
	isActive = true
	
	constructor(owner, options = {}, handlers = {}) {
		this.owner = owner
		this.options = options
		this.handlers = handlers
	}

	merge(options) {
		this.options = merge(this.options, options)

		return this
	}

	add(accessor) {
		if (accessor instanceof BekitAccessor) {
			this.accessors.add(accessor)
		}

		return this
	}

	delete(accessor) {
		if (accessor instanceof BekitAccessor) {
			this.accessors.delete(accessor)
		}

		return this
	}

	has(accessor) {
		if (accessor instanceof BekitAccessor) {
			return this.accessors.has(accessor)
		}

		return false
	}

	clear() {
		this.accessors.clear()

		return this
	}

	setActive(status) {
		this.isActive = status

		return this
	}

	onChange(result) {
		get(this.handlers, 'onChange', () => {
			if (this.owner instanceof React.Component) {
				this.owner.forceUpdate()
			}
		})(result)
		this.accessors.forEach(accessor => accessor.onChange(result))
	}

	toPlainObject() {
		let requestBody = cloneDeep(this.options)

		for (const accessor of this.accessors.values()) {
			if (accessor.isActive) {
				requestBody = merge(requestBody, accessor.toPlainObject())
			}
		}

		return requestBody
	}
}

