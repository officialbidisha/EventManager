import "./App.css";
import Events from "./components/Events";
import EventList from "./components/EventList";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="flex-column">
          <EventList />
        </div>
        <div className="flex-column">
        <EventList />
        </div>
      </div>
    </div>
  );
}

export default App;
