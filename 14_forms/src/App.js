import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [fullName, setfullName] = useState();
  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const onSubmit = () => {
    setfullName(name);
  };

  return (
    <>
      <div className="main">
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter yuor name"
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onSubmit}>Click Me </button>
      </div>
    </>
  );
};

export default App;
