import React from 'react';

const EventsList = ({sortedEvent}) => {
  return (
      <div>
      {sortedEvent.map(event =>
        <div key={event.id} className='rectangle'>
          <div className='date'>
            <span className='dd'>
              {event.date}
            </span>
            <span className='month'>
              Месяц
            </span>
            <p>{event.duration}</p>
          </div>
          <h3>{event.title}</h3>
          <p>{event.type}</p>
          <button className='event-button'>
            View more
          </button>

        </div>
      )}
      </div>

  );
};

export default EventsList;