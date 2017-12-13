import { computed } from 'mobx'
import { observer } from 'mobx-react'
import get from 'lodash/get'
import { ES_FIELD } from '../stores'
import BekitComponent from './BekitComponent'

class BekitESComponent extends BekitComponent {

  @computed get result() {
    return this.store.get(ES_FIELD)
  }

  set result(value) {
    this.store.set(ES_FIELD, value)
  }

  getHits() {
    return get(this.result, 'hits.hits', [])
  }

  getBuckets(name) {
    return get(this.result, `aggregations.${name}.buckets`, [])
  }
}

export default observer(BekitESComponent)