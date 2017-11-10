import BekitAccessor from './BekitAccessor'

export default class BekitQuery extends BekitAccessor {

	toPlainObject() {
		return { query: super.toPlainObject() }
	}
}

