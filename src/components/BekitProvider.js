import React from 'react'
import PropTypes from 'prop-types'
import BekitManager from '../core/BekitManager'

export default class BekitProvider extends React.Component {

	static childContextTypes = {
		bekit: PropTypes.instanceOf(BekitManager).isRequired
	}

	static propTypes = {
		translation: PropTypes.object,
		children: PropTypes.node,
		bekit: PropTypes.instanceOf(BekitManager).isRequired
	}

	getChildContext() {
		return {
			bekit: this.props.bekit
		}
	}

	render() {
		return this.props.children
	}

	componentWillMount() {
		const { bekit, translation } = this.props

		bekit.setTranslation(translation)
	}

	componentDidMount() {
		const bekit = this.props.bekit

		if (bekit.options.searchOnLoad) {
			bekit.search()
		}
	}
}

