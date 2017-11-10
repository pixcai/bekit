import cloneDeep from 'lodash-es/cloneDeep'
import BekitComponent from '../components/BekitComponent'
import BekitAccessor from './BekitAccessor'

export default class BekitAggregation extends BekitAccessor {

	toPlainObject() {
		let requestBody = { aggs: {} }

		if (this.owner instanceof BekitComponent) {
			requestBody.aggs = {
				[this.owner.uuid]: cloneDeep(this.options)
			}
		}
		for (const accessor of this.accessors.values()) {
			if (accessor.owner instanceof BekitComponent) {
				requestBody.aggs = merge(requestBody.aggs, {
					[accessor.owner.uuid]: accessor.toPlainObject()
				})
			}
		}

		return requestBody
	}
}

