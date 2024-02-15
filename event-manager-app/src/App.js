import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useEffect, Suspense } from "react";
import { getEventList } from "./stores/actions/actions";
import { store } from "./stores/index";
import Loader from "./components/Loader";
import { makeErrorNull } from "./stores/actions/actions";
const SelectedEventsList = React.lazy(() =>
  import("./components/SelectedEventsList")
);
const EventList = React.lazy(() => import("./components/EventList"));

function App() {
  const error = useSelector((state) => state.app.error);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(store.getState());
    if (store.getState().app.events.length <= 0) {
      store.dispatch(getEventList());
    }
  
  }, []);

  useEffect(()=>{
    if(error){
      debugger;
      alert(error.message);
      if(window.confirm){
        console.log('Confirm');
        dispatch(makeErrorNull());
      }
    }
  }, [error])


  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={<Loader></Loader>}>
          <div className="row border">
            <div className="flex-column style2">
              <p className="event-header">All Events</p>
              <div className="flex-condition">
                <Suspense fallback={<Loader></Loader>}>
                  <EventList />
                </Suspense>
              </div>
            </div>
            <div className="flex-column style2">
              <p className="event-header">Selected Events</p>
              <div className="flex-condition">
                <Suspense
                  fallback={<div className="eventlist">List is empty</div>}
                >
                  <SelectedEventsList />
                </Suspense>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </Fragment>
  );
}

export default App;
