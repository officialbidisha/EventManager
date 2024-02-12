import "./App.css";
import EventList from "./components/EventList";

import { Provider } from 'react-redux'
import store from './stores/index'
function App() {
  return (
    <Provider store={store}>
    <div className="App" id="style-2" >
      <div className="row border">
        <div className="flex-column">
          <p className="event-header">All Events</p>
          <div className="flex-condition">
            <EventList />
          </div>
        </div>
        <div className="flex-column">
          <p className="event-header">Selected Events</p>
          <div className="flex-condition">
            <EventList />
          </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
