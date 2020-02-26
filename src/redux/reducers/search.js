import { toJson } from 'unsplash-js'

const initialState = {
    photos: {},
    error: null,
    loading: false,
    query: null,
    savedQueries: [],
    onDisplay: []
}

const saveQuery = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_LOADING":
            return {
                ...state, 
                loading: true
            }
            break;
        case "QUERY_SUCCESS":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: null,
                loading: false,
                query: action.queryKeyword,
                onDisplay: action.payload
            }
            break;
        case "QUERY_FAILURE":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: action.error,
                loading: false,
                query: action.queryKeyword
            }
            break;
        case "QUERY_SAVE":
            if(!state.savedQueries.includes(state.query)){
                return {
                    ...state, 
                    photos: {
                        ...state.photos,
                        [action.queryKeyword]: action.payload
                    },
                    error: action.error,
                    loading: false,
                    savedQueries: [...state.savedQueries, state.query]
                }
            }
            return state
            break;
        case "QUERY_LOAD_SAVED":
                return {
                    ...state, 
                    onDisplay: state.photos[action.query]
                }
            return state
            break;
        default: return state
    }
}


export default saveQuery