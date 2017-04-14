import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { Transact } from './containers/Transact';
import { TransactSummary } from './containers/TransactSummary';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Transact} />
        <Route path="/transact" component={Transact} />
        <Route path="/transact/:office_id/:transact_id/summary" component={TransactSummary} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('mod-transact-widget')
);
