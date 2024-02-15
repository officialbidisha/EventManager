import * as actionTypes from "../action-types/action-types";

export const getEventList = () => async (dispatch) => {
  let response;
  try { 
    debugger;
    let eventList = await fetch(
        "https://run.mocky.io/v3/9e564653-bf83-4fb8-a223-28075130ff9c"
      );
    response = await eventList.json();
  } catch (err) {
    console.error(err);
  }

  dispatch({
    type: actionTypes.GET_EVENTLIST,
    payload: response,
  });
};

export const selectEvent = (eventDetails) => async(dispatch) => {
    dispatch({type: actionTypes.SELECT_EVENT, payload:eventDetails});
};

export const removeSelectedEvent = (eventDetails) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_SELECTED_EVENT, payload: eventDetails });
};

export const makeEventUnselectable = (eventDetails) => async (dispatch) => {
  dispatch({type: actionTypes.MAKE_EVENT_UNSELECTABLE, payload:eventDetails});
}

export const makeErrorNull = () => async(dispatch) => {
  dispatch({type:actionTypes.REMOVE_ERROR_STATE});
}