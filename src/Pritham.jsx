import React,{Component} from 'react';
import './evm.css';
import Insideevm1 from "./Insideevm";
import Vvpat from "./Vvpat"
  class Car extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        partyselected :"NULL"
      }

    }
    updatevvpat = (party) =>
    {
     
      this.setState({partyselected :party} )
  
 }
    render() {
      return <div className='MainBox'>
        <Vvpat partyvoted={this.state.partyselected}/>
        <div className='outerbox'>
            <Insideevm1 updated={this.updatevvpat}/>
          </div>
        </div>;
    }
  }
  
  export default Car