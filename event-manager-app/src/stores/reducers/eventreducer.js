import * as actionTypes from "../action-types/action-types";
const initialState = {
  selectedEvents: [],
  events: [],
  error: null,
  disabledIndex: [],
};

const getConflictingEvents = (events, payload) => {
  let conflictingIds = [];
  let sortedIntervals = [...events];
  const {
    id,
    endTime: end_time,
  } = payload;
  sortedIntervals.sort(
    (a, b) =>
      new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
  );
  console.log(sortedIntervals);
  for(let i=0;i<sortedIntervals.length;i++){
    if(new Date(sortedIntervals[i].start_time).getTime() <= new Date(end_time).getTime()){
      conflictingIds.push(sortedIntervals[i].id);
    }
  }
  console.log("Conflicting ids", conflictingIds);
  return conflictingIds;
  // chunking
  // code splitting
  // intersection observer
  //
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
      return {
        ...state,
        selectedEvents: state.selectedEvents.filter(
          (x) => x.id !== action.payload.id
        ),
        events: [...state.events, action.payload],
        error: null,
        disabledIndex: [],
      };
    default: {
      return state;
    }
  }
};
