import * as React from 'react';

import { Contacts } from '../../components/Contacts';

export function Chat(props) {
  return (
    <div>
      { props.emitter }
      <Contacts/>
    </div>
  );
}