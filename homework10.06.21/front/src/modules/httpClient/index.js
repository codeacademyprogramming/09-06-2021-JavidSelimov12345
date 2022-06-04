import axios from 'axios';

export class HttpClient {
	baseUrl;
	constructor(url) {
		this.baseUrl = url;
	}

	async get(url) {
		return await axios.get(`${this.baseUrl}/${url}`);
	}
	async post(url, body) {
		// ${this.baseUrl/${url}}  normalda bu linke post olur fantaziya olsun bizde fake url oldugundan asagidakinapost olacaq
		return await axios.post(`${url}`, body);
	}
	async delete(url) {
		return await axios.delete(`${url}`);
	}
}
