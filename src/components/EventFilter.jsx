import React from 'react';
import MySelect from './select/MySelect';
import list from './list.png';
import grid from './grid.png';

const EventFilter = ({ filter, setFilter, sortOptions,limit, setLimit, isShow,setIsShow }) => {


  return (
    <div className="toolbar">
      <div className={'toolbar__block'}>
        <span>Event category</span>
        <MySelect
          className={'select-category check-box'}
          value={filter.category}
          onChange={(selectedSort) => setFilter({ ...filter, category: selectedSort })}
          options={sortOptions}
          defaultValue={'all themes'}
        />
      </div>
      <div className={'toolbar__block'}>
        <span>Sort by</span>
        <MySelect
          className={'select-sort check-box'}
          value={filter.sort}
          defaultValue={'newset'}
          onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
          options={['oldest']}
        />
      </div>
      <div className={'toolbar__block'}>
        <span>Show</span>
        <input type='number'
               value={limit}
               min={'1'}
               onChange={(event) => setLimit(event.target.value)}
               className={'select-show check-box'}
        />
        <span className={'light-gray'}>events per page</span>
      </div>
      <input
        className={'check-box search-input'}
        type="search"
        placeholder={'Search event...'}
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <i className={'search-loupe'}/>
      <div className={'card-view'}>
        <img className={`list ${ 1}`} src={list} alt="list"
             onClick={()=>setIsShow(true)}

        />
        <img className={`grid ${1 }`} src={grid} alt="grid"
             onClick={()=>setIsShow(false)}

        />
      </div>
    </div>
  );
};

export default EventFilter;