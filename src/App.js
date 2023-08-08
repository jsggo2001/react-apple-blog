/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from "react";

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '파이썬독학', '강남 우동맛집']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{

        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={()=>{

        let copy2 = [...글제목];
        
        copy2.sort();

        글제목변경(copy2);
      }}>글정렬</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        글제목.map(function(a, i) {
          return (
            <div className="list">
              <h4 onClick={ ()=>{ setModal(true); setTitle(i) } }>
                { 글제목[i] } 
              <span onClick={(e)=>{ 
                                  e.stopPropagation();
                                  let copy2 = [...따봉];
                                  copy2[i] = copy2[i] + 1;
                                  따봉변경(copy2)  
                                  }}>👍</span> 
                { 따봉[i] }
                </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy)
              }}>삭제</button>

            </div>
          )
        })
      }

      
      <input onChange={(e)=>{ 
        입력값변경(e.target.value)
        console.log(입력값)  
        }}/>
        <button onClick={()=>{ 
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
         }}>글발행</button>
      {
        modal == true ? <Modal title={title} color={'orange'} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
      
      {/* <Modal2></Modal2> */}
      
    </div>
  )
}



function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{ props.글제목변경(['여자 코트 추천', '파이썬독학', '강남 우동맛집']) }}>글수정</button>
    </div>
  )
}

// props 적용하는 방법 적용되 있는데
// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'kim',
//       age: 20
//     }
//   }
//   render(){
//     return (
//       <div>안녕 {this.props}
//         <button onClick={() => {
//           this.setState({age : 21})
//         }}>버튼</button>
//       </div>
//     )
//   }
// }



export default App;
