import { SONG_ACTIONS } from '../actions/consts'
import { ASYNC_STATUS } from '../../../redux/consts'


const initialState = {

	data: [],
	status: ASYNC_STATUS.IDLE,
	error: null,
};

export function songReducer(state = initialState, action) {

	switch (action.type) {

		case `${SONG_ACTIONS.GET_SONG}`:

			return {
				...state,
				status: ASYNC_STATUS.LOADING,
				data: [],
				error: null,
			}

		case `${SONG_ACTIONS.GET_SONG}_SUCCESS`:
			return {
				...state,
				status: ASYNC_STATUS.SUCCESS,
				data: action.payload,
				error: null,
			}
		case `${SONG_ACTIONS.GET_SONG}_ERROR`:

			return {
				...state,
				status: ASYNC_STATUS.ERROR,
				data: [],
				error: action.error,
			};

		case `${SONG_ACTIONS.ADD_SONG}`:
			return {
				...state,
				status: ASYNC_STATUS.LOADING,
				error: null,
			};
		case `${SONG_ACTIONS.ADD_SONG}_SUCCESS`:
			return {
				...state,
				status: ASYNC_STATUS.SUCCESS,
				data: [...state.data, action.payload],
				error: null,
			};
		case `${SONG_ACTIONS.ADD_SONG}_ERROR`:
			return {
				...state,
				status: ASYNC_STATUS.ERROR,
				error: action.error,
			};




		case `${SONG_ACTIONS.UPDATE_SONG}`:
			return {
				...state,
				status: ASYNC_STATUS.LOADING,
				error: null,
			};
		case `${SONG_ACTIONS.UPDATE_SONG}_SUCCESS`:
			return {
				...state,
				status: ASYNC_STATUS.SUCCESS,
				data: state.data.map((coffee) => {
					if (coffee.title === action.payload.title) {
						return {
							...action.payload,
						};
					}
					return coffee;
				}),
				error: null,
			};
		case `${SONG_ACTIONS.UPDATE_SONG}_ERROR`:
			return {
				...state,
				status: ASYNC_STATUS.ERROR,
				error: action.error,
			};

		default:
			break;
	}

	return state;
}



