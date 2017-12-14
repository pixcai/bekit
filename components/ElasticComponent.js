import { computed } from 'mobx'
import get from 'lodash/get'
import { ELASTIC_FIELD } from '../stores'
import Component from './Component'

export default class ElasticComponent extends Component {

  @computed get result() {
    return this.store.get(ELASTIC_FIELD)
  }

  set result(value) {
    this.store.set(ELASTIC_FIELD, value)
  }

  getHits() {
    return get(this.result, 'hits.hits', [])
  }

  getBuckets(name) {
    return get(this.result, `aggregations.${name}.buckets`, [])
  }
}
