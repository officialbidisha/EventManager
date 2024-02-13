import { useEffect, useState } from "react";
import Events from "./Events";
import { useDispatch, useSelector } from "react-redux";

import { getEventList } from "../stores/actions/actions";
const EventList = () => {
  const list = useSelector((state)=> state.events);
  return list && list.map((listEle, index) => {
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
