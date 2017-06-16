import React from 'react';
import { connect } from 'react-redux';

import UserList from './UserList';

import { fetchUsers } from '../actions/userActions';

@connect(store => {
	return {
		users: store.users.users
	}
})

class AppComponent extends React.Component{
	componentWillMount() {
		this.props.dispatch(fetchUsers());
	}

	render(){
		return (
			<main>
				My App component
				<UserList users = {this.props.users}/>
			</main>
		);
	}
}

export default AppComponent;