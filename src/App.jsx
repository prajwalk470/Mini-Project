import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeCompiler from './Components/CodeCompiler';
import LoginPage from './Components/Login';
function App() {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<LoginPage/>}/>
        <Route path="/code" element={<CodeCompiler />} /> 
    </Routes>
  </Router>
//  <CodeCompiler/>
  );
}

export default App;

