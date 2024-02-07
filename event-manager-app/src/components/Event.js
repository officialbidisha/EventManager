import './Event.css'; 
import '../styles.css';
import tConvert from '../utils.js/timeConverter.util';
const Event = ({id, name, category, startTime, endTime}) => {
    const firstLetter = category.substring(0,1);
    const [startdate, starttime] = startTime.split(' ');
    const [enddate, endtime] = endTime.split(' ');
    console.log(starttime);
    return(
        <div className='event-card'>
            <div className='caption'>{firstLetter}</div>
            <hr className="vertical"></hr>
            <div className='rightrow'>
                <div className='name mb-3'>{name}</div>
                <div className='category mb-3'>{category}</div>
                <div className='time mb-3'>{tConvert(starttime)}-{tConvert(endtime)}</div>
                <button className='select-btn'>Select</button>
            </div>
        </div>
    )
}

export default Event