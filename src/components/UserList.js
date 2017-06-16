import React from 'react';

import User from './User'

class UserList extends React.Component{
	render(){
		if (Object.getOwnPropertyNames(this.props.users).length === 0) {
			return (<div></div>)
		}

		let userNodes = this.props.users.map((user) => {
			return (
					<User name={user.name} email={user.email} key={user.id}>
						{user.name}
					</User>
				)
		});

		return (
			<div>
				<h3>Users</h3>
				{userNodes}
			</div>
		);
	}
}

export default UserList;