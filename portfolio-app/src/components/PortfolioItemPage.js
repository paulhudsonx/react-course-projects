import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const PortfolioItemPage = (props) => {
  let { id } = useParams();

  return (
    <div>
      <h1>This is Portfolio Item {props.match.params.id}</h1>
      <h2>This is Julie's Portfolio Id {id}</h2>
    </div>
  );
};

export default PortfolioItemPage;
