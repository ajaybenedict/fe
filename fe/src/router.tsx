import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { About, MembersPageContainer, MemberDetailPageContainer, MemberPageContainer } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/members" component={MembersPageContainer} />
            <Route exact path="/member" component={MemberPageContainer} />
            <Route path="/member/:id" component={MemberPageContainer} />
            {/* <Route exact path="/memberDetail" component={MemberDetailPageContainer} /> */}
            <Route path="/memberDetail/:id" component={MemberDetailPageContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}