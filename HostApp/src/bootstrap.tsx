import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Host from './Host';
import {deferRender} from './mocks/mockingSetup';

deferRender().then(() => {
  ReactDOM.render(<Host />, document.getElementById("hostApp"));
});


