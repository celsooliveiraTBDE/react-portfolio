import _ from 'lodash';
import {FETCH_COMMENTS, GET_COMMENT, DELETE_COMMENT} from '../actions';

export default function (state = {}, action) {

switch(action.type){
// case GET_ALL_COMMENTS: 

// return _.mapKeys(action.payload.data, 'id');

case GET_COMMENT:
return {...state, [action.payload.data.id]: action.payload.data };

case FETCH_COMMENTS:
return _.mapKeys(action.payload.data, '_id');

 //{4:COMMENT}

case DELETE_COMMENT:
return _.omit(state, action.payload);

 default:
 return state;

}
}