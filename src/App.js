/* eslint-disable */

import "./App.css";
import logo from "./logo.svg";
import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [추천, 추천변경] = useState(0);
  let posts = "강남고기맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span onClick={() => 추천변경(추천 + 1)}>👍</span>
          {추천}
        </h3>
        <p>02/17</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>02/18</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>02/19</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
