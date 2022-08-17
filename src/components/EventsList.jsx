import React, { useState } from 'react';
import timeConversion, { timeDate, timeMonth } from './timeHelper';

const EventsList = ({ sortedEvent, isShow }) => {
  const [isHovered, setIsHovered] = useState(false);

  function toUpCase(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  let rectangle = ' shadow';
  if (isHovered === false) {
    rectangle = '';
  }

  return (
    <div className={'event-list'}>
      {isShow
        ? sortedEvent.map((event) => (
            <div key={event.id} className={`rectangle ${rectangle}`}>
              <div className="date">
                <span className="dd">{timeDate(event.date)}</span>
                <span className="month">
                  {timeMonth(event.date)}
                  <span className={'duration'}>{timeConversion(event.duration)}</span>
                </span>
              </div>

              <div className={'event-title__container'}>
                <h3 className={'event-title'}>{event.title}</h3>
                <p className={'event-type'}>{toUpCase(event.type)}</p>
              </div>

              <button
                className={'event-button'}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                View more
              </button>
            </div>
          ))
        : sortedEvent.map((event) => (
            <div key={event.id} className={`rectangle-grid ${rectangle}`}>
              <div className="date-grid">
                <span className="dd-grid">
                  {timeDate(event.date)} {timeMonth(event.date).substr(0, 3)}
                </span>
                <span className={'duration'}>{timeConversion(event.duration)}</span>
              </div>

              <div className={'event-title__container-grid'}>
                <h3 className={'event-title-grid'}>{event.title}</h3>
                <p className={'event-type'}>{toUpCase(event.type)}</p>
              </div>

              <button
                className={'event-button-grid'}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                View more
              </button>
            </div>
          ))}
    </div>
  );
};

export default EventsList;