import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Singleauthor from "./Pages/Singleauthor/single.author";
const client = new ApolloClient({
  uri: "https://api.graphqlplaceholder.com",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Singleauthor} exact path="/user/:id" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
