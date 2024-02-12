import { useEffect, useState } from "react";
import Events from "./Events";
import { useDispatch, useSelector } from "react-redux";

import { getEventList } from "../stores/actions/actions";
const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector((state)=> state.events.events);
  const selectedEventList = useSelector((state)=> state.events.selectedEvents);

  const fetchEvents = async () => {
    dispatch(getEventList());
    setEvents(list);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return events.map((listEle, index) => {
    let {
      event_name: name,
      event_category: category,
      id,
      end_time: endTime,
      start_time: startTime,
    } = listEle;
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

export default EventList;
