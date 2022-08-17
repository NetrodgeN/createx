import React, { useState } from 'react';
import timeConversion, { timeDate, timeMonth } from './timeHelper';


const EventsList = ({ sortedEvent }) => {
  const [isHovered, setIsHovered] = useState(false)
  function toUpCase (str) {
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1)
  }
  let rectangle = 'rectangle shadow'
  if(isHovered === false) {
    rectangle = 'rectangle'
  }

  return (
    <div className={'event-list'}>
      {sortedEvent.map((event) => (
        <div key={event.id} className={rectangle}>
          <div className="date">
            <span className="dd">{timeDate(event.date)}</span>
            <span className="month">{timeMonth(event.date)}
              <span className={'duration'}>{timeConversion(event.duration)}</span>
            </span>
          </div>

          <div className={'event-title__container'}>
            <h3 className={'event-title'}>{event.title}</h3>
            <p className={'event-type'}>{ toUpCase(event.type)}</p>
          </div>

          <button
            className={'event-button'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >View more</button>
        </div>
      ))}
    </div>
  );
};

export default EventsList;