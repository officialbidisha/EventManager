import Events from "./Events";
import { useSelector } from "react-redux";
import './Events.css';
const SelectedEventsList = () => {
  const selectedEventList = useSelector((state)=> state.selectedEvents);
  return selectedEventList && selectedEventList.map((listEle, index) => {
    debugger
    let {
      event_name: name,
      event_category: category,
      id,
      end_time: endTime,
      start_time: startTime,
    } = listEle;
    console.log('e', listEle);
    return (
        <Events
          key={id}
          id={id}
          name={name}
          category={category}
          endTime={endTime}
          startTime={startTime}
        ></Events>
    );
  });
};

export default SelectedEventsList;
