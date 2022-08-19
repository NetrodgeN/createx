import axios from 'axios';

export const getEvents = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_EVENTS' });
      const response = await axios.get(`https://62f22f4225d9e8a2e7d8cae5.mockapi.io/api/events`);
      dispatch({ type: 'FETCH_EVENTS_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({ type: 'FETCH_EVENTS_ERROR', payload: 'Произошла ошибка при загрузке' });
    }
  };
};