import React,{Component} from "react";
import './evm.css';
class Vvpat extends Component{
   constructor(props){
      super(props);
      this.state = {
         partyview :this.props.partyvoted,
         
       };
     
   }
   
 render(){


    return<div className="vvpat">{this.props.partyvoted!="NULL"?<img src={this.props.partyvoted}/>:null}</div>
 }


}
export default Vvpat;