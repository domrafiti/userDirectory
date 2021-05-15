import './App.css';
import { useEffect, useState } from "react";
import Search from '';
import Navbar from '';
import Table from '';

function App() {


  // state = {
  //   searchKeyword = "",
  // };


  return (
    <>
      <div>
        <Search />
        <Navbar />
        <Table />
      </div>
    </>
  );
}

export default App;
