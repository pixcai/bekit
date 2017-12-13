import {
  extendObservable,
  observable
} from 'mobx'

export default class BekitManager {

  constructor(owner, initialStore) {
    extendObservable(this, {
      owner: owner,
      store: observable.ref(initialStore)
    })
  }
}