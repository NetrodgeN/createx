import React from 'react';

const Subscribe = () => {
  return (
    <div className={'subscribe__wrapper'}>
      <h6 className={'subscribe__prelude-title'}>DON’T MISS ANYTHING</h6>
      <h2 className={'subscribe__title'}>Subscribe to the Createx School announcements</h2>
      <form action='#' className={'subscribe__form'}>
        <input className={'check-box subscribe__input'} type='email' placeholder={'Your working email'}/>
        <button className={'button subscribe__btn'}>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;