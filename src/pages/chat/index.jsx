import * as React from 'react';

import { Contacts } from '../../components/Contacts';
import { Conversation } from '../../components/Conversation';

export function Chat() {
  return (
    <div className="row">
      <Contacts/>
      <Conversation emitterId='ck5fgsdljip2p0961e27q39ou' receiverId='ck5fgsmmuip4t09616e9trb6v'/>
    </div>
  );
}