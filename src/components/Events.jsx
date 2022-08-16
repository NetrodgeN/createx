import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../store/action-creators/action';
import MySelect from './select/MySelect';
import EventsList from './EventsList';



const Events = () => {
  const [filter, setFilter] = useState({ category: '', sort:'', });
  // const [searchQuery, setSearchQuery] = useState('')
  const { events, error, loading } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const sortOptions = [...new Set([...events].map(e => e.type))]

  // const sorted = useMemo(() =>{
  //   if(filter.sort === 'date'){
  //     return [...events].sort((a, b) => a[filter.sort] > b[filter.sort] ? 1 : -1)
  //   }
  //   //сделать как если сорт равен date
  //   return [...events].sort((a, b) => a[filter.sort] < b[filter.sort] ? 1 : -1)
  //   return events
  // },[filter.sort, events])

  const sortedEventCategory = useMemo(() => {
    if (filter.category !== 'all themes') {
      return [...events].filter((a) => a.type === filter.category);
    }
    return events;
  }, [filter.category, events]);

  if (loading) {
    return <h1>идёт загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="wrapper main-wrapper">
      <p className="title-event-list">OUR EVENTS</p>
      <h1 className="title-event-list-2">Lectures, workshops & master-classes</h1>

      <div className="toolbar">
        <span>Event category</span>
        <MySelect
          value={filter.category}
          onChange={(selectedSort) => setFilter({ ...filter, category: selectedSort })}
          options={sortOptions}
          defaultValue={'all themes'}
        />

        <span>Sort by</span>
        {/*<MySelect*/}
        {/*  value={searchQuery}*/}
        {/*  onChange={e => setSearchQuery(e.target.value)}*/}
        {/*  options={[*/}
        {/*    {value: 'date', name: 'newset'},*/}
        {/*    {value: 'oldest', name: 'oldest'},*/}
        {/*  ]}*/}
        {/*/>*/}
        <span>Show</span>
        {/*<select>*/}
        {/*  <option value='value3'>9</option>*/}
        {/*  <option value='value3'>12</option>*/}
        {/*  <option value='value3'>15</option>*/}
        {/*  <option value='value3'>18</option>*/}
        {/*</select>*/}
        <input
          type='search'
          placeholder={'Search event...'}
          value={filter.search}
          onChange={e => setFilter({search: e.target.value})}
        />
        <i></i>
        <img src="#" alt="" />
        <img src="#" alt="" />
      </div>

      <EventsList sortedEvent={sortedEventCategory} />
    </div>
  );
};

export default Events;