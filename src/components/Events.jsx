import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../store/action-creators/action';
import MySelect from './select/MySelect';
import EventsList from './EventsList';

const Events = () => {
  const [filter, setFilter] = useState({category:''})

  const {events, error, loading} = useSelector(state => state.events)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getEvents())
  },[])

  const sortedEvent = useMemo(() => {
    if (filter.category === 'type') {
      return [...events].filter((a) => a[filter.category] === 'snake')
    } else if  (filter.category === 'type') {
      return [...events].filter((a) => a[filter.category] === 'crocodilia')
    }
    return events

    },[filter.category, events])

  if(loading){
    return <h1>идёт загрузка</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }



  return (
    <div className='wrapper main-wrapper'>
      <p className='title-event-list'>OUR EVENTS</p>
      <h1 className='title-event-list-2'>Lectures, workshops & master-classes</h1>

      <div className='toolbar'>
        <span>Event category</span>
        <MySelect
          value={filter.category}
          onChange={selectedSort => setFilter({...filter, category: selectedSort})}
          options={[
            {value: 'all themes', name: 'all themes'},
            {value: 'type', name: 'snake'},
            {value: 'type', name: 'crocodiliaa'},
            {value: 'bear', name: 'bear'},
            {value: 'fish', name: 'fish'},
            {value: 'cetacean', name: 'cetacean'},
            {value: 'rabbit', name: 'rabbit'},
            {value: 'lion', name: 'lion'},
            {value: 'cat', name: 'cat'},
          ]}
        />

        <span>Sort by</span>
        {/*<MySelect*/}
        {/*  options={[*/}
        {/*    {value: 'newset', name: 'newset'},*/}
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
        {/*<input*/}
        {/*  type='search'*/}
        {/*  placeholder={'Search event...'}*/}
        {/*  value={searchQuery}*/}
        {/*  onChange={e => setSearchQuery(e.target.value)}*/}
        {/*/>*/}
        <i></i>
        <img src='#' alt='' />
        <img src='#' alt='' />
      </div>

      <EventsList sortedEvent={sortedEvent}/>
    </div>
  );
};

export default Events;