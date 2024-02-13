import * as actionTypes from "../action-types/action-types";
const initialState = {
  selectedEvents: [],
  events: [],
};

export const eventReducer = (state = initialState, action)  => {
  switch (action.type) {
    case actionTypes.GET_EVENTLIST:
      return {
        ...state,
        events: [...action.payload],
      };
    case actionTypes.SELECT_EVENT:
      return {
        ...state,
        selectedEvents: [...state.selectedEvents, action.payload],
        events: state.events.filter((x)=> x.id!== action.payload.id)
     };
    case actionTypes.REMOVE_SELECTED_EVENT:
      debugger;
      console.log('ds',{
        ...state,
        selectedEvents:state.selectedEvents.filter((x)=> x.id!== action.payload.id),
        
        events: [...state.events, action.payload]
      });
      return {
        ...state,
        selectedEvents:state.selectedEvents.filter((x)=> x.id!== action.payload.id),
        events: [...state.events, action.payload]
      }
    default: {
      return state;
    }
  }
};