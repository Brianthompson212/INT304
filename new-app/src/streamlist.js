import React, { useState } from "react";

function StreamList() {
  const [streamList, setStreamList] = useState([]);
  const [input, setInput] = useState("");

  const addToStreamList = () => {
    setStreamList([...streamList, input]);
    setInput("");
  };

  return (
    <div>
      <h1>StreamList</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add to your stream list"
      />
      <button onClick={addToStreamList}>Add</button>
      <ul>
        {streamList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
