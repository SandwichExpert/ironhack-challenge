import React, { useState } from "react";

export default function CustomizeImage() {
  const [state, setState] = useState({
    url: "",
    size: ""
  });

  function handleInputChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      url: value
    });
  }

  function handleRangeChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      size: value
    });
  }

  function customize() {
    if (state.url && state.size) {
      return (
        <>
          <img src={state.url} width={state.size} height={state.size} />
        </>
      );
    }
  }

  return (
    <div className="container">
      <h1>Customize Image</h1>
      <input type="text" name="url" onChange={handleInputChange} />
      <input
        type="range"
        name="size"
        min="0"
        max="200"
        onChange={handleRangeChange}
      />
      <p>
        {state.size}x{state.size}
      </p>
      {customize(state.url)}
    </div>
  );
}
