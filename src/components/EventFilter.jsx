import React from 'react';
import MySelect from './select/MySelect';

const EventFilter = ({ filter, setFilter, sortOptions, limit, setLimit, isShow, setIsShow }) => {
  let style = 'active-list';
  let activeGrid = '';
  if (isShow === false) {
    style = '';
    activeGrid = 'active-grid';
  }

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
        <input
          type="number"
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
      <i className={'search-loupe'} />
      <div className={'card-view'}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`grid ${style}`}
          onClick={() => setIsShow(true)}
        >
          <path
            className={style}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.833252 2.91671C0.833252 1.76611 1.76599 0.833374 2.91658 0.833374H17.0833C18.2338 0.833374 19.1666 1.76611 19.1666 2.91671V7.08337C19.1666 8.23397 18.2338 9.16671 17.0833 9.16671H2.91658C1.76599 9.16671 0.833252 8.23397 0.833252 7.08337V2.91671ZM2.91658 2.50004C2.68647 2.50004 2.49992 2.68659 2.49992 2.91671V7.08337C2.49992 7.31349 2.68647 7.50004 2.91658 7.50004H17.0833C17.3134 7.50004 17.4999 7.31349 17.4999 7.08337V2.91671C17.4999 2.68659 17.3134 2.50004 17.0833 2.50004H2.91658Z"
            fill="#424551"
          />
          <path
            className={style}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.833252 12.9167C0.833252 11.7661 1.76599 10.8334 2.91658 10.8334H17.0833C18.2338 10.8334 19.1666 11.7661 19.1666 12.9167V17.0834C19.1666 18.234 18.2338 19.1667 17.0833 19.1667H2.91658C1.76599 19.1667 0.833252 18.234 0.833252 17.0834V12.9167ZM2.91658 12.5C2.68647 12.5 2.49992 12.6866 2.49992 12.9167V17.0834C2.49992 17.3135 2.68647 17.5 2.91658 17.5H17.0833C17.3134 17.5 17.4999 17.3135 17.4999 17.0834V12.9167C17.4999 12.6866 17.3134 12.5 17.0833 12.5H2.91658Z"
            fill="#424551"
          />
        </svg>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`list`}
          onClick={() => setIsShow(false)}
        >
          <path
            className={activeGrid}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.833344 2.91671C0.833344 1.76611 1.76608 0.833374 2.91668 0.833374H7.08334C8.23394 0.833374 9.16668 1.76611 9.16668 2.91671V7.08337C9.16668 8.23397 8.23394 9.16671 7.08334 9.16671H2.91668C1.76608 9.16671 0.833344 8.23397 0.833344 7.08337V2.91671ZM2.91668 2.50004C2.68656 2.50004 2.50001 2.68659 2.50001 2.91671V7.08337C2.50001 7.31349 2.68656 7.50004 2.91668 7.50004H7.08334C7.31346 7.50004 7.50001 7.31349 7.50001 7.08337V2.91671C7.50001 2.68659 7.31346 2.50004 7.08334 2.50004H2.91668Z"
            fill="#424551"
          />
          <path
            className={activeGrid}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.833344 12.9167C0.833344 11.7661 1.76608 10.8334 2.91668 10.8334H7.08334C8.23394 10.8334 9.16668 11.7661 9.16668 12.9167V17.0834C9.16668 18.234 8.23394 19.1667 7.08334 19.1667H2.91668C1.76608 19.1667 0.833344 18.234 0.833344 17.0834V12.9167ZM2.91668 12.5C2.68656 12.5 2.50001 12.6866 2.50001 12.9167V17.0834C2.50001 17.3135 2.68656 17.5 2.91668 17.5H7.08334C7.31346 17.5 7.50001 17.3135 7.50001 17.0834V12.9167C7.50001 12.6866 7.31346 12.5 7.08334 12.5H2.91668Z"
            fill="#424551"
          />
          <path
            className={activeGrid}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8333 2.91671C10.8333 1.76611 11.7661 0.833374 12.9167 0.833374H17.0833C18.2339 0.833374 19.1667 1.76611 19.1667 2.91671V7.08337C19.1667 8.23397 18.2339 9.16671 17.0833 9.16671H12.9167C11.7661 9.16671 10.8333 8.23397 10.8333 7.08337V2.91671ZM12.9167 2.50004C12.6866 2.50004 12.5 2.68659 12.5 2.91671V7.08337C12.5 7.31349 12.6866 7.50004 12.9167 7.50004H17.0833C17.3135 7.50004 17.5 7.31349 17.5 7.08337V2.91671C17.5 2.68659 17.3135 2.50004 17.0833 2.50004H12.9167Z"
            fill="#424551"
          />
          <path
            className={activeGrid}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8333 12.9167C10.8333 11.7661 11.7661 10.8334 12.9167 10.8334H17.0833C18.2339 10.8334 19.1667 11.7661 19.1667 12.9167V17.0834C19.1667 18.234 18.2339 19.1667 17.0833 19.1667H12.9167C11.7661 19.1667 10.8333 18.234 10.8333 17.0834V12.9167ZM12.9167 12.5C12.6866 12.5 12.5 12.6866 12.5 12.9167V17.0834C12.5 17.3135 12.6866 17.5 12.9167 17.5H17.0833C17.3135 17.5 17.5 17.3135 17.5 17.0834V12.9167C17.5 12.6866 17.3135 12.5 17.0833 12.5H12.9167Z"
            fill="#424551"
          />
        </svg>
      </div>
    </div>
  );
};

export default EventFilter;