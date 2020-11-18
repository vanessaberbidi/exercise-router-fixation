import React from 'react';

export default class Users extends React.Component {
  render() {
    const { ship } = this.props.match.params
    return (
      <div>
        <h2> Users </h2>
        <p> {this.props.message}, this is my awesome {ship} </p>
      </div>
    )
  }
}