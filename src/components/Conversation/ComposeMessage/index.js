import * as React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

export function ComposeMessage(props) {
  const ENTER_KEY_CODE = 13;
  const [ message, setMessage ] = React.useState('');

  const SEND_MESSAGE = gql`
    mutation CreateMessage($content: String, $emitter: ID, $receiver: ID) {
      createMessage(content: $content, emitter: $emitter, receiver: $receiver) {
        id
      }
    }
  `;

  const [createMessage] = useMutation(SEND_MESSAGE);

  const onChange = (event) => setMessage(event.target.value); 
  
  const onKeyUp = (event) => {
    if(event.keyCode === ENTER_KEY_CODE) {
      sendMessage();
    }
  }

  const sendMessage = () => { 
    createMessage({ variables: {
      content: message,
      emitter: props.emitterId,
      receiver: props.receiverId,
    }});
    setMessage('');
  } 

  return (
    <div className="compose-message-container">
      <div className="input-group pr-2 pl-2">
        <input type="text" className="form-control" 
          placeholder="Ecrivez un message" 
          value={message} 
          onChange={onChange}
          onKeyUp={onKeyUp}
          aria-label="Ecrivez un message" />
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary" 
            type="button" 
            id="button-addon2"
            onClick={sendMessage}>
              Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}