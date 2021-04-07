import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.index + 1}. {props.text}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.text);
      }}>Delete
    </button>
  </div>

);

export default Option;
