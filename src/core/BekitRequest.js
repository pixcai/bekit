import axios from 'axios'

export default class BekitRequest {
	
	constructor(options = {}) {
		this.instance = axios.create(options)
	}

	post(url, data) {
		return this.instance.post(url, data).then(response => response.data)
	}

	put(url, data) {
		return this.instance.put(url, data).then(response => response.data)
	}

	delete(url) {
		return this.instance.delete(url).then(response => response.data)
	}

	head(url) {
		return this.instance.head(url).then(response => response.data)
	}

	get(url) {
		return this.instance.get(url).then(response => response.data)
	}
}

