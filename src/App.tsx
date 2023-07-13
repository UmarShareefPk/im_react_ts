import React from 'react';
import { connect } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello to TS React</h1>
    </div>
  );
}


const mapStateToProps = (state:any) => {
  return{     
   
  }
}

export default connect(mapStateToProps)(App);

