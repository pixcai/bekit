import PropTypes from 'prop-types'
import throttle from 'lodash-es/throttle'
import BekitComponent from './BekitComponent'

export default class BekitSearchBox extends BekitComponent {

	static propTypes = {
		interval: PropTypes.number
	}

	constructor(props) {
		super(props)
		this.performSearch = throttle(function (accessor) {
			this.search(accessor)
		}.bind(this), props.interval || 0, { trailing: false })
	}

	onChange(e) {
		this.performSearch()
	}
}

