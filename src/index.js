import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import '../vendor/skeleton/normalize.css';
import '../vendor/skeleton/skeleton.css';
import './index.css';

import BaseLayout from './components/BaseLayout';
import LandingPage from './components/LandingPage';
import ContactContainer from './containers/ContactContainer';
import ContactAdd from './components/ContactAdd';
import ContactEdit from './components/ContactEdit';
import ContactView from './components/ContactView';
import SignUpContainer from './containers/SignUpContainer';
import SignInContainer from './containers/SignInContainer';
import NotFound from './components/NotFound';

const loggedIn = () => {
	let state = store.getState();
	return state.currentUser.email.length;
}

const requireAuth = ( nextState, replace ) => {
	if ( !loggedIn() ) {
		replace({
			pathname: '/signin'
		})
	}
}

const Root = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={BaseLayout}>
					<IndexRoute component={LandingPage} />
					<Route path="signup" component={SignUpContainer} />
					<Route path="signin" component={SignInContainer} />
					<Route path="home" component={ContactContainer} onEnter={ requireAuth }>
						<Route path="add" component={ContactAdd} />
						<Route path="view/:id" component={ContactView} />
						<Route path="edit/:id" component={ContactEdit} />
					</Route>
					<Route path="*" component={NotFound} />
				</Route>
			</Router>
		</Provider>
	)
}

render(<Root />, document.getElementById('root'));
