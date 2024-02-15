
import Events from "./Events";
import { useSelector } from "react-redux";
const SelectEventList = () => {
  const list = useSelector((state)=> state.app.selectedEvents);
  return (list && list.length>0) ? list.map((ele, index) => {
    return (
        <Events
          key={ele.id}
          id={ele.id}
          name={ele.name}
          category={ele.category}
          endTime={ele.endTime}
          startTime={ele.startTime}
          isSelected ={true}
        ></Events>
    );
  }): <p className="select-list"> Select an event!</p>
};

export default SelectEventList;
