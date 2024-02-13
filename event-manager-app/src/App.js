import "./App.css";
import EventList from "./components/EventList";
import SelectedEventsList from "./components/SelectedEventsList";
import { Provider, useSelector} from 'react-redux'
import store from './stores/index'
import { getEventList } from "./stores/actions/actions";
import { Fragment, useEffect, useState } from "react";

function App() {

  const error = useSelector((state)=> state.error);
  useEffect(()=>{
    store.dispatch(getEventList());
  },[])


  return (
    <Fragment>
      <div className="App" >
        <div className="row border">
          <div className="flex-column style2">
            <p className="event-header">All Events</p>
            <div className="flex-condition">
              <EventList />
            </div>
          </div>
          <div className="flex-column style2">
            <p className="event-header">Selected Events</p>
            <div className="flex-condition">
              <SelectedEventsList />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
