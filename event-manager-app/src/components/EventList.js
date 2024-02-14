import { useEffect, useState } from "react";
import Events from "./Events";
import { useSelector } from "react-redux";
const EventList = () => {
  const list = useSelector((state)=> state.events);
  const disabledIndex = useSelector((state)=> state.disabledIndex);

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
          isSelected={false}
          isDisabled={disabledIndex.indexOf(id)!== -1? true: false}
        ></Events>
    );
  });
};

export default EventList;
