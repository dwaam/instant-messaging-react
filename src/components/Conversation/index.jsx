import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './conversation.scss';

export function Conversation(props) {

  const GET_CONVERSATION = gql`
    query GetMessagesBetween($emitterId: ID!, $receiverId: ID!){
      getMessagesBetween(emitter: $emitterId, receiver: $receiverId) {
        id
        emitter {
          id
        }
        receiver {
          id
        }
        createdAt
        content
      }
    }
    `;

  const getMessagePosition = (message) => message.emitter.id === props.emitterId ? 'message right' : 'message left';

  const { loading, data } = useQuery(GET_CONVERSATION, { variables: { emitterId: props.emitterId, receiverId: props.receiverId }});

  if (loading) return <p>Loading...</p>

  return (
    <div className="conversation-container col-9">
      {data.getMessagesBetween.map(message => (
        <div className={getMessagePosition(message)}>
          <div key={message.id}>{ message.content }</div>
        </div>
      ))}
    </div>
  );
}