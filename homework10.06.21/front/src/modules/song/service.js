
import { HttpClient } from '../httpClient';

class SongService extends HttpClient {
	constructor() {
		super('http://localhost:8003');

		
	}
	getSong() {
		return this.get('songs');
	}

	addSong(data) {
		console.log("post",data)
		return this.post('http://localhost:8003/songs', data);
		
	}
	deleteSong(id) {
		
		return this.delete(`http://localhost:8003/songs${id}`);
		
	}

	// updateSong(data) {
	// 	return this.post('https://jsonplaceholder.typicode.com/posts', data);
	// }


}

export const songService = new SongService();
