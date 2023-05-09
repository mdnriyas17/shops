import React, { useState } from "react";
import "./App.css";

import Shoping from "./pages/Shoping";
function App(props) {
  const [page,setPage] = useState("cart");
  return (
    <div className="App">
      <Shoping/>
 
    </div>
  );
  }
export default App;
