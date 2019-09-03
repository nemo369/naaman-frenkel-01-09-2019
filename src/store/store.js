import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
  city: {
    cityid: 215854,
    location: {
      Key: '215854',
      Type: 'City',
      LocalizedName: 'Tel Aviv',
      Country: { ID: 'ISR', LocalizedName: 'ISRAEL' }
    }
  },
  favs: JSON.parse(localStorage.getItem('cities-favs'))
    ? JSON.parse(localStorage.getItem('cities-favs'))
    : [],
  nightMode: JSON.parse(localStorage.getItem('night-mode'))
    ? JSON.parse(localStorage.getItem('night-mode'))
    : false
};

const store = createStore(rootReducer, defaultState);

export default store;
