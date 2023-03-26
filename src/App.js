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
  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = "여자코트 추천";
  //   글제목변경(newArray);
  // }
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
      <Modal></Modal>
    </div>
  );
}

/**
 * ! 유의사항
 * 이름은 대문자
 * return 안에 있는건 태그 하나여야만 함, 추가하고싶으면 <></> 안에
 * ! 컴포넌트를 만드는 기준
 * 반복출현하는 덩어리들
 * 자주 변경되는 HTML UI들
 * 다른 페이지 만들 때
 * ! 단점
 * state 쓸 때 복잡함 (props문법 이용하면 됨)
 */

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  );
}

export default App;
