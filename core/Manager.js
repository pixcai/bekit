import {
  extendObservable,
  asMap
} from 'mobx'

export default class Manager {

  constructor(owner, initialStore) {
    extendObservable(this, {
      owner: owner,
      store: asMap(initialStore)
    })
  }
}

