import React, { useState } from "react";
import axios from "axios";
// import cors from "cors";
const CodeExecution = () => {
  const [language, setLanguage] = useState("py");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const executeCode = async () => {
    try {
      const response = await axios.post("http://localhost:3001/execute-code", {
        code: code,
        language: language,
        input: input
      });
      const output = response.data.run.output;
      setOutput(output);
    } catch (error) {
      console.error(error);
      setError("An error occurred while executing the code.");
    }
  };
  

  return (
    <div className="container">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-select"
      >
        <option value="py">Python</option>
        <option value="js">JavaScript</option>
        <option value="java">Java</option>
        {/* Add more options for other languages if needed */}
      </select>
      <br />
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="code-input"
        placeholder="Enter your code here"
      ></textarea>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input (optional)"
      ></input>
      <br />
      <button onClick={executeCode} className="submit-btn">
        Execute Code
      </button>
      <div className="output">{output || error}</div>
    </div>
  );
};

export default CodeExecution;
