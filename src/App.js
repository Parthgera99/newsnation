import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News';

export default class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     text : ""
  //   };
  // }

  // handleOnChange =(event)=>{
  //   this.setText(event.target.value)
  // }
  

  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<News category="general"/> }/> */}
          <Route path="/" element={<News category="general" /> }/>
          <Route path="business" element={<News category="business"/> }/>
          <Route path="sports" element={<News category="sports"/> }/>
          <Route path="science" element={<News category="science"/> }/>
          <Route path="health" element={<News category="health"/> }/>
          <Route path="technology" element={<News category="technology"/> }/>
          <Route path="entertainment" element={<News category="entertainment"/> }/>
      </Routes>
    </BrowserRouter>
      </>
    )
  }
}


