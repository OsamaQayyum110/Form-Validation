
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [comment, setComment] = useState("");

  const form = { name, email, age, gender, position, comment };
  
  const Submit = async () => {
    console.log(form);
    let result = await fetch("http://localhost:4500/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type":"application/json",
      }
    });

    result = await result.json();
    console.log(result);
    
  }
  

  return (
    <div className="App">
      <div>
        <h1>Contact us</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Your Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Your Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <input
            className="feedback"
            placeholder="Enter Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button onClick={Submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
