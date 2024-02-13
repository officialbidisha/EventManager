
import Events from "./Events";
import { useSelector } from "react-redux";
const SelectEventList = () => {
  const list = useSelector((state)=> state.selectedEvents);
  return list && list.map((ele, index) => {
    return (
        <Events
          key={ele.id}
          id={ele.id}
          name={ele.name}
          category={ele.category}
          endTime={ele.endTime}
          startTime={ele.startTime}
        ></Events>
    );
  });
};

export default SelectEventList;
