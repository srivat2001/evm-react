import React, { Component, setstate}from "react";
import './evm.css';
import Insideevm1 from "./Insideevm";
class Votevalue extends Component{
  constructor(props){
    super(props);
    this.handleincrement = this.handleincrement.bind(this);
    this.state = {
      vote :this.props.vote,
      isButtonDisabled: false,
      party:this.props.partyname,
      imglink:this.props.imglink

      
    };
 
      }


  handleincrement = (e) =>{

      this.setState({vote:this.state.vote + 1});
      
      e.target.style.backgroundColor="#003982";
      
      setTimeout(() => {e.target.style.backgroundColor="white"}, 5000);
      this.props.cooldownfc(this.state.imglink);
 
    

 //  return this.props.handleincrement();
  }

  render(){

    return (
        <div className="partyholder" >
          <div className="partyholderflexcontainer">
            <div className="partyimage"><img src={this.props.imglink}/></div>
            <div className="partyholderdetails">
              <div className='partyname'>{this.props.partyname}</div>
              <button disabled={this.props.votebtn} onClick={this.handleincrement}>{this.state.vote}</button>
            </div>
          </div>
          </div>

      )
  }

  formatcounter(){
    const {vote} = this.state;
    return this.state.vote===0?'Zero':this.state.vote
  }
  

}export default Votevalue