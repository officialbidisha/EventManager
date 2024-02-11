import "./App.css";
import Events from "./components/Events";
import EventList from "./components/EventList";
function App() {
  return (
    <div className="App">
      <div className="row border">
        <div className="flex-column">
          <p className="event-header">All Events</p>
          <EventList />
        </div>
        <div className="flex-column">
        <p className="event-header">Selected Events</p>
        <EventList />
        </div>
      </div>
    </div>
  );
}

export default App;
