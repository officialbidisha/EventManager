import * as actionTypes from "../action-types/action-types";

export const getEventList = () => async (dispatch) => {
  let response;
  try { 
    let eventList = await fetch(
        "https://run.mocky.io/v3/018935c1-197a-4324-a70c-1c1df215e734"
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
    console.log('EVENT DETAILS', eventDetails);
    dispatch({type: actionTypes.SELECT_EVENT, payload:eventDetails});
};

export const removeSelectedEvent = (eventDetails) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_SELECTED_EVENT, payload: eventDetails });
};