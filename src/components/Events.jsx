import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../store/action-creators/action';
import EventsList from './EventsList';
import EventFilter from './EventFilter';
import Pagination from './Pagination';

const Events = () => {
  const [filter, setFilter] = useState({ category: 'all themes', sort: '', search: '' });
  const { events, error, loading } = useSelector((state) => state.events);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [isShow, setIsShow] = useState(true);

  const sortOptions = [...new Set([...events].map((e) => e.type))];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const sortedEventCategory = useMemo(() => {
    if (filter.category !== 'all themes') {
      return [...events].filter((a) => a.type === filter.category);
    }
    return events;
  }, [filter.category, events]);

  const sorted = useMemo(() => {
    if (filter.sort === 'oldest') {
      return [...sortedEventCategory].sort((a, b) => (a.date < b.date ? 1 : -1));
    }
    return [...sortedEventCategory].sort((a, b) => (a.date > b.date ? 1 : -1));
  }, [filter.sort, events, sortedEventCategory]);

  const sortedAndSearched = useMemo(() => {
    return sorted.filter((element) =>
      element.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }, [filter.search, sortedEventCategory, sorted, events]);

  const lastEventIndex = page * limit;
  const firstEventIndex = lastEventIndex - limit;
  const currentEvent = sortedAndSearched.slice(firstEventIndex, lastEventIndex);

  const paginate = (pageNumber) => setPage(pageNumber);

  if (error) {
    return <h1 className={'error'}>{error}</h1>;
  }

  return (
    <div className="wrapper main-wrapper">
      <p className="title-event-list">OUR EVENTS</p>
      <h1 className="title-event-list-2">Lectures, workshops & master-classes</h1>
      <EventFilter
        filter={filter}
        setFilter={setFilter}
        sortOptions={sortOptions}
        setLimit={setLimit}
        limit={limit}
        isShow={isShow}
        setIsShow={setIsShow}
        setPage={setPage}
      />
      {loading ? (
        <h1 className={'loader'}> Loading </h1>
      ) : (
        <EventsList sortedEvent={currentEvent} isShow={isShow} />
      )}
      <Pagination
        page={page}
        limit={limit}
        totalEvents={sortedAndSearched.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Events;