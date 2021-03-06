import React from "react";

export class UserList extends React.Component {
  render() {
    return (
      <ul className="user-list">
        {this.props.users.map(user => (
          <li>
            <img alt="avatar" src={user.avatarUrl} />
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
}
