import React, { useState } from 'react';

export default function DisplayMessages(props) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function submitMessage() {
    props.submitNewMessage(input);
    setInput('');
  }

  return (
    <div>
      <h2>Type in a new Message:</h2>
      <input value={input} onChange={handleChange} />
      <br />
      <button onClick={submitMessage}>Submit</button>
      <ul>
        {props.messages.messages.map((message, idx) => {
          return <li key={idx}>{message}</li>;
        })}
      </ul>
      {console.log(props)}
    </div>
  );
}
