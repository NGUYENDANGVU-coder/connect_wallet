import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Success from "./page/Success";
import { useState } from "react";
import { errors } from "ethers";
function App() {
  const [isConnected,setIsConnected] =useState(false);
 
  console.log(isConnected);
  return (
      <div className="App">
      {!isConnected && (
        <div>
          <Login setIsConnected={setIsConnected}/>
        </div>
      )}
      {isConnected && (
        <Success setIsConnected={setIsConnected}/>
      )}
    </div>
  );
}

export default App;
