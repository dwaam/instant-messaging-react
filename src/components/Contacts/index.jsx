import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export function Contacts() {
  const GET_USERS = gql`
    {
      getUsers {
        id
        username
      }
    }`;

  const { loading, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>

  return (
    <div className="contacts-container col-3">
      <div className="list-group">
        {data.getUsers.map(contact => (<div className="list-group-item" key={contact.id}>{ contact.username }</div>))}
      </div>
    </div>
  );
}