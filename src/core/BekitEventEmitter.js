export default class BekitEventEmitter {

	events = new Map()

	emit(eventName, ...args) {
		for (const [name, handlers] of this.events.entries()) {
			if (eventName === name) {
				handlers.forEach(handler => handler.apply(args))
			}
		}
	}

	on(eventName, handler) {
		const handlers = this.events.get(eventName)

		if (handlers) {
			handlers.push(handler)
		} else {
			this.events.set(eventName, [handler])
		}
	}
}

