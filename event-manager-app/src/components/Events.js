import "./Events.css";
import "../styles.css";
import tConvert from "../utils.js/timeConverter.util";
import { useDispatch } from "react-redux";
import { removeSelectedEvent, selectEvent } from "../stores/actions/actions";
const Events = ({
  id,
  name,
  category,
  startTime = "",
  endTime = "",
  isSelected = false,
}) => {
  const dispatch = useDispatch();
  const firstLetter = category && category.substring(0, 1);
  const [startdate, starttime] = startTime.split(" ");
  const [enddate, endtime] = endTime.split(" ");


  const toggleSelection = () => {
    if (!isSelected) {
      dispatch(selectEvent({ id, name, category, startTime, endTime }));
    }
    else{
        dispatch(removeSelectedEvent({ id:id, event_name:name, event_category:category, start_time:startTime, end_time:endTime }));
    }
  };

  return (
    <div className="event-card">
      <div className="caption">{firstLetter}</div>
      <hr className="vertical"></hr>
      <div className="rightrow">
        <div className="name mb-3">{name}</div>
        <div className="category mb-3">{category}</div>
        <div className="time mb-3">
          {tConvert(starttime)}-{tConvert(endtime)}
        </div>
        <button className="select-btn float-right" onClick={toggleSelection}>
          {!isSelected ? "Select" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default Events;
