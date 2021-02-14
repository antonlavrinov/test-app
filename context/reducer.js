// import {useReducer} from 'react'

// export const updateSortQueryParams = (payload) => {
//     return {
//         type: 'UPDATE_SORT_QUERY_PARAMS',
//         payload
//     }
// }

// export const updatePlatformQueryParams = (payload) => {
//     return {
//         type: 'UPDATE_PLATFORM_QUERY_PARAMS',
//         payload
//     }
// }

// export const updateGames = (payload) => {
//     return {
//         type: 'UPDATE_GAMES',
//         payload
//     }
// }

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'UPDATE_GAMES':
//             return {
//                 ...state,
//                 games: action.payload
//             }
//         case 'UPDATE_SORT_QUERY_PARAMS':
//             return {
//                 ...state,
//                 queryParams: {
//                     ...state.queryParams,
//                     sortQuery: action.payload
//                 }
//             }
//         case 'UPDATE_PLATFORM_QUERY_PARAMS':
//             return {
//                 ...state,
//                 queryParams: {
//                     ...state.queryParams,
//                     platformQuery: action.payload
//                 }
//             }
//         default:
//             return state;
//     }
// }




// const [state, dispatch] = useReducer(reducer, {
//     games: [],
//     queryParams: {
//         platformQuery: '',
//         sortQuery: ''
//     }
// })

// export {state, dispatch}