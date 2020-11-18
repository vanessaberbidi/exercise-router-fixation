import React from 'react';
import { Redirect } from 'react-router-dom';

export default class StrictAccess extends React.Component {
  render() {
    const { name, password } = this.props.user;
    if(!name === 'joao' && password === '1234') {
      alert('Access denied');
      return <Redirect to="/" />
    }
    return (
      <div>
        <p>Welcome Joao!</p>
      </div>
    )
  }
}