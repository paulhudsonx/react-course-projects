import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PortfolioPage from "../components/PortfolioPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

class AppRouter extends React.Component {
  state = {
    items: []
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/portfolio" component={PortfolioPage} exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioItemPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>

      </BrowserRouter>);
  }
}

AppRouter.defaultProps = {
  items: ["1", "2"]
}

export default AppRouter;
