import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeCompiler from './Components/CodeCompiler';
import LoginPage from './Components/Login';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
// import LandingPage from './Components/Landing';
function App() {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<LoginPage/>}/>
       {/* <Route path="/" element={<LandingPage/>}/> */}
        <Route path="/code" element={<ChakraProvider theme={theme}><CodeCompiler /> </ChakraProvider>} /> 
    </Routes>
  </Router>
//  <CodeCompiler/>
  );
}

export default App;

