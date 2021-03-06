// Just an arbitary child component

import React from 'react';

import { getState, setState } from '../actions';

let Clipboard = ({ dispatch }) => {
  let input;
  return (
    <section>
      <input id="clipboard-input" placeholder="Paste state here" ref={node => {
        input = node;
      }}/>

      <button onClick={e => {
        try { // simple test to validate if entered text is JSON
          let parsedState = JSON.parse(input.value);
          dispatch(setState(parsedState)); // passes parsed input to the system
          input.value = '';
        } catch (e) { // entered data isn't valid json
          console.warn('Cannot parse entered state');
        }
      }}>Set State</button>

      <button onClick={e => {
        dispatch(getState())
        input.value = ''
      }}>Get State</button>
    </section>
  );
}

export default Clipboard;
