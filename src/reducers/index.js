import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contacts from './contacts';
import currentUser from './currentUser';
import auth from './auth';

const rootReducer = combineReducers( { 
	contacts,
	currentUser,
	signIn: auth,
	auth,
	routing: routerReducer 
} );

export default rootReducer;