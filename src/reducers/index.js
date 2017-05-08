import { combineReducers } from 'redux';
import subscriptions from './subscriptionReducer';
import nav from './navReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    subscriptions,
    nav,
    auth,
});

export default rootReducer;
