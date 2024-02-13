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
      return {
        ...state,
        selectedEvents:state.selectedEvents.filter((x)=> x.id!== action.payload.id),
      }
    default: {
      return state;
    }
  }
};