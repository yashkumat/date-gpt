import React, { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState("");
  const [selected, setSelected] = useState("");
  let moods = ["Happy", "Sad", "Angry", "Disgust", "Suprise", "Flirt", "Fear"];

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/getResponse", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ message: message, mood: mood }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  }

  return (
    <div className="App">
      <h1 className="Heading">Date GPT</h1>
      <form onSubmit={handleSubmit} className="Form">
        <textarea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="Textarea"
          rows={5}
          placeholder="Enter the question on which you want reply..."
        ></textarea>
        <br />
        <div className="Moods">
          {moods.map((mood, key) => (
            <button
              key={key}
              onClick={(e) => {
                e.preventDefault();
                setSelected(key);
                setMood(mood);
              }}
              className="MoodButton"
              style={{
                background: selected === key ? "black" : "white",
                color: selected === key ? "white" : "black",
                border: "none",
              }}
            >
              {mood}
            </button>
          ))}
        </div>
        <button type="submit" className="Button">
          Submit
        </button>
      </form>
      <div className="Response">{response}</div>
    </div>
  );
}

export default App;
