import {combineReducers} from 'redux';
import subscriptions from './subscriptionReducer';

const rootReducer = combineReducers({
  subscriptions,
});

export default rootReducer;
