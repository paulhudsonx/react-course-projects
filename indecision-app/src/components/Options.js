import React from 'react';

import Option from "./Option";

const Options = (props) => {
  console.log(props.options);
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          disabled={props.options.length == 0} onClick={props.handleClearOptions}>Remove all
        </button>
      </div>
      {/* <p>Options length: {props.options.length}</p> */}
      {props.options.length == 0 && <p className="widget__message">Enter an option to get started</p>}
      {props.options.map((option, index) => <Option key={option} text={option} index={index}
                                             handleDeleteOption={props.handleDeleteOption}/>)}
    </div>
  );
}

export default Options;
