import * as actionTypes from "../action-types/action-types";
const initialState = {
  selectedEvents: [],
  events: [],
  error:null,
};

export const eventReducer = (state = initialState, action)  => {
  switch (action.type) {
    case actionTypes.GET_EVENTLIST:
      return {
        ...state,
        events: [...action.payload],
        error:null,
      };
    case actionTypes.SELECT_EVENT:
      if(state.selectedEvents && state.selectedEvents.length<4){
      return {
        ...state,
        selectedEvents: [...state.selectedEvents, action.payload],
        events: state.events.filter((x)=> x.id!== action.payload.id),
        error:null
     };
      }
      else{
        return {
          ...state,
          selectedEvents: [...state.selectedEvents, action.payload],
          events: state.events.filter((x)=> x.id!== action.payload.id),
          error: {message:'Cannot select more than 3 events'},
       };
      }
    case actionTypes.REMOVE_SELECTED_EVENT:
      return {
        ...state,
        selectedEvents:state.selectedEvents.filter((x)=> x.id!== action.payload.id),
        events: [...state.events, action.payload],
        error:null
      }
    default: {
      return state;
    }
  }
};