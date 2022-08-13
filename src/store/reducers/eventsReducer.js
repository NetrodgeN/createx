const FETCH_EVENTS = 'FETCH_EVENTS'
const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR'


const inititalState = {
  events:[],
  loading: false,
  error:null,
}

export const eventsReducer = (state = inititalState, action) =>{
  switch (action.type){
    case FETCH_EVENTS:
      return {loading: true, error:null, events:[]}
    case FETCH_EVENTS_SUCCESS:
      return {loading: false, error:null, events:action.payload}
    case FETCH_EVENTS_ERROR:
      return {loading: false, error:action.payload, events:[]}
    default:
      return state
  }
}