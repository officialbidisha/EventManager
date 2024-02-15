import * as actionTypes from "../action-types/action-types";
import {
  returnTime,
  isConflictPresent,
} from "../../utils.js/conflictCalculator";
const initialState = {
  selectedEvents: [],
  events: [],
  error: null,
  disabledIndex: [],
};
const getConflictingEvents = (events, payload) => {
  let conflictingIds = [];
  for (let i = 0; i < events.length; i++) {
    let l1 = returnTime(events[i].start_time);
    let l2 = returnTime(payload.startTime);
    let r1 = returnTime(events[i].end_time);
    let r2 = returnTime(payload.endTime);

    if (isConflictPresent(l1, l2, r1, r2) && conflictingIds.indexOf(events[i].id)=== -1) {
      conflictingIds.push(events[i].id);
    }

    // chunking
    // code splitting
    // intersection observer
    //
  }
  return conflictingIds;
};

const removeConflictingEvents = (currentDisabledIndexes, events, payload) => {
  let conflictingIds = currentDisabledIndexes;
  for (let i = 0; i < events.length; i++) {
    let l1 = returnTime(events[i].start_time);
    let l2 = returnTime(payload.start_time);
    let r1 = returnTime(events[i].end_time);
    let r2 = returnTime(payload.end_time);

    if (isConflictPresent(l1, l2, r1, r2)) {
      conflictingIds = conflictingIds.filter(function (item) {
        return item !== events[i].id;
      });
    }
  }
  return conflictingIds;
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EVENTLIST:
      return {
        ...state,
        events: [...action.payload],
        error: null,
        disabledIndex: [],
      };
    case actionTypes.SELECT_EVENT:
      if (state.selectedEvents && state.selectedEvents.length <= 2) {
        let currentDisabledIndexes = getConflictingEvents(
          state.events.filter((x) => x.id !== action.payload.id),
          action.payload
        );
        return {
          ...state,
          selectedEvents: [...state.selectedEvents, action.payload],
          events: state.events.filter((x) => x.id !== action.payload.id),
          error: null,
          disabledIndex: [...state.disabledIndex, ...currentDisabledIndexes],
        };
      } else {
        return {
          ...state,
          error: { message: "Cannot select more than 3 events" },
        };
      }
    case actionTypes.REMOVE_SELECTED_EVENT:
      let currentDisabledIndexes = state.disabledIndex;
      let updatedDisabledIndexes = removeConflictingEvents(
        currentDisabledIndexes,
        state.events,
        action.payload
      );
      return {
        ...state,
        selectedEvents: state.selectedEvents.filter(
          (x) => x.id !== action.payload.id
        ),
        events: [...state.events, action.payload],
        error: null,
        disabledIndex: [...updatedDisabledIndexes],
      };
    case actionTypes.ADD_ERROR:
      return{
        ...state,
        error:{message: action.payload.error}
      }
    case actionTypes.REMOVE_ERROR_STATE: 
       return{
        ...state,
        error:null
       }
    default: {
      return state;
    }
  }
};
