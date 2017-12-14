import {
  extendObservable,
  observable
} from 'mobx'

export default class Manager {

  constructor(owner, initialStore) {
    extendObservable(this, {
      owner: owner,
      store: observable.ref(initialStore)
    })
  }
}
