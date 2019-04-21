import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main';
import Warning from './common/Warning';
import Aipebot from './sub/Aipebot';
import Aipe from './sub/Aipe';
import Uzbit from './sub/Uzbit';
import Whatthemex from './sub/Whatthemex';
import Piks from './sub/Piks';
import Medicare from './sub/Medicare';
import Siwan from './sub/Siwan';


class AppRouter extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/aipebot" component={Aipebot}/>
          <Route path="/aipe" component={Aipe}/>
          <Route path="/uzbit" component={Uzbit}/>
          <Route path="/whatthemex" component={Whatthemex}/>
          <Route path="/3piks" component={Piks}/>
          <Route path="/medicare" component={Medicare}/>
          <Route path="/siwan" component={Siwan}/>
          <Route path="/warning" component={Warning}/>
          <Route render={ () => <Redirect to="/warning" />}/>
        </Switch>
      </>
    );
  }
}

export default AppRouter;