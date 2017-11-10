import React from 'react'
import BekitComponent from '../components/BekitComponent'
import BekitAggregation from '../api/BekitAggregation'

export default class Hits extends BekitComponent {

	getQuery() {
		return new BekitAggregation(this, {
			terms: {
				field: "TranName.keyword"
			}
		})
	}

	getElement() {
		return (
			<table>
				<tbody>
				{
					this.getBuckets().map((bucket, key) => (
						<tr key={key}>
							<td>{bucket.key}</td>
							<td>{bucket.doc_count}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		)
	}
}

