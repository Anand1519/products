import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from 'routes/products';
import CartTable from 'routes/cart';

class Routes extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/cart" component={CartTable} />
                <Route
                    path="*"
                    render={() => (
                        <h1 style={{ textAlign: "center"}}>404:Page Not Found</h1>
                    )}
                />
            </Switch>
      </Router>

    );
  }
}

export default Routes;