import { createStore } from 'redux';
import rootReducer from './reducers/bookReducer';

const store = createStore(rootReducer);

export default store;
