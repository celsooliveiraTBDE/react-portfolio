import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";
import BlogReducer from './blogReducer';
import CommentReducer from './commentReducer';

const rootReducer = combineReducers({

    posts: BlogReducer,
    comments: CommentReducer,
    form: formReducer
});

export default rootReducer;


