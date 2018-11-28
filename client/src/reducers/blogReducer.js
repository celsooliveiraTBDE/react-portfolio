import _ from 'lodash';
import {FETCH_POSTS, GET_POST} from '../actions';

export default function (state = {}, action) {

switch(action.type){
// case GET_ALL_POSTS: 

// return _.mapKeys(action.payload.data, 'id');

case GET_POST:
return {...state, [action.payload.data.id]: action.payload.data };

case FETCH_POSTS:
return _.mapKeys(action.payload.data, '_id');

 //{4:post}

// case DELETE_POST:
// return _.omit(state, action.payload);

 default:
 return state;

}
}