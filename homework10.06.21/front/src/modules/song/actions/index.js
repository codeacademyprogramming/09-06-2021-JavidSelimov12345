import { SONG_ACTIONS } from "./consts";
import { songService } from '../service'


export function getSong(dispatch) {
	dispatch({type:SONG_ACTIONS.GET_SONG})
    songService.getSong().then(({data})=>{
		// console.log(data)
		dispatch({
			type:`${SONG_ACTIONS.GET_SONG}_SUCCESS`,
			payload: data,
		})
	}).catch((err)=>{
		dispatch({
			type:`${SONG_ACTIONS.GET_SONG}_ERROR`,
			error: err,
		})
	})
	

}


export function addSong(dispatch) {
	return function (data) {
		dispatch({ type: SONG_ACTIONS.ADD_SONG });

		songService
			.addSong(data)
			.then((resp) => {
				console.log('postdayam',resp);
				dispatch({
					type: `${SONG_ACTIONS.ADD_SONG}_SUCCESS`,

					payload: data,
				});
			})
			.catch((err) =>
				dispatch({
					type: `${SONG_ACTIONS.ADD_SONG}_ERROR`,

					error: err,
				})
			);
	};
}


export function updateSong(dispatch) {
	return function (data) {
		dispatch({ type: SONG_ACTIONS.UPDATE_SONG });

		songService
			.addSong(data)
			.then((resp) => {
				console.log(resp);
				dispatch({
					type: `${SONG_ACTIONS.UPDATE_UPDATE_SONG}_SUCCESS`,

					payload: data,
				});
			})
			.catch((err) =>
				dispatch({
					type: `${SONG_ACTIONS.UPDATE_UPDATE_SONG}_ERROR`,

					error: err,
				})
			);
	};
}






