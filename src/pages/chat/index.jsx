import * as React from 'react';

import { Contacts } from '../../components/Contacts';

export function Chat(props) {
  return (
    <div className="row">
      <Contacts/>
      { props.emitter }
    </div>
  );
}