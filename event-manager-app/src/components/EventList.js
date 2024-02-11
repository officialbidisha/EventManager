import { useEffect, useState } from "react"
import Events from "./Events";
const EventList = () => {
    const [events, setEvents] = useState([]);
    
    const fetchEvents = async() => {
        let eventList = await fetch('https://run.mocky.io/v3/018935c1-197a-4324-a70c-1c1df215e734');
        let list = await eventList.json();
        setEvents(list);

    }

    useEffect(()=> {
        fetchEvents();
    }, [])

    return(
        events.map((listEle, index)=> {
            let { event_name: name, event_category:category, id, end_time:endTime, start_time:startTime  } = listEle;
            return <Events key={id} id={id} name={name} category={category} endTime={endTime} startTime={startTime}></Events>
        })
    )
}

export default EventList;