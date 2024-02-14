import "./App.css";
import EventList from "./components/EventList";
import SelectedEventsList from "./components/SelectedEventsList";
import {  useSelector} from 'react-redux'
import { Fragment, useEffect } from "react";
import { getEventList } from "./stores/actions/actions";
import {store} from './stores/index';

function App() {
  const error = useSelector((state)=> state.app.error);
  useEffect(()=>{
    store.dispatch(getEventList());
  }, [])

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
