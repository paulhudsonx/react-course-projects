import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/*const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </Layout>, document.getElementById('app'));*/
ReactDOM.render(<IndecisionApp options={['Opt 1', 'Opt 2']}/>, document.getElementById('app'));
