import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Navbar />
    </div>
  );
};

export default App;
