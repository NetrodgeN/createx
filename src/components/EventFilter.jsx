import React from 'react';
import MySelect from './select/MySelect';

const EventFilter = ({ filter, setFilter, sortOptions, setLimit }) => {
  return (
    <div className="toolbar">
      <span>Event category</span>
      <MySelect
        value={filter.category}
        onChange={(selectedSort) => setFilter({ ...filter, category: selectedSort })}
        options={sortOptions}
        defaultValue={'all themes'}
      />

      <span>Sort by</span>
      <MySelect
        value={filter.sort}
        defaultValue={'newset'}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        options={['oldest']}
      />
      <span>Show</span>
      <select onChange={event => setLimit(event.target.value)}>
        <option value='9'>9</option>
        <option value='12'>12</option>
        <option value='15'>15</option>
        <option value='18'>18</option>
      </select>
      <input
        type="search"
        placeholder={'Search event...'}
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <i></i>
      <img src="#" alt="#" />
      <img src="#" alt="#" />
    </div>
  );
};

export default EventFilter;