import * as types from './actionTypes';
import SubscriptionApi from '../api/mockSubscription';
//import {beginAjaxCall} from './ajaxStatusActions';

export function loadSubscriptionsSuccess(subscriptions) {
    return {type: types.LOAD_SUBSCRIPTIONS_SUCCESS, subscriptions};
}

export function loadSubscriptions() {
    return dispatch => {
        //dispatch(beginAjaxCall());
        return SubscriptionApi.getAllSubscriptions().then(subscriptions => {
            dispatch(loadSubscriptionsSuccess(subscriptions));
        }).catch(error => {
            throw(error);
        });
    };
}
