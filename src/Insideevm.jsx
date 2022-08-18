import React, { Component} from 'react';
import './evm.css';
import Votevalue from "./Partyholder";
class Insideevm1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      disabled :false
    };
  
      }
    
    partylist= 
        {
            party:[

              {
                name:"BJP",votes:0,link:require('./img/Bjp.png')
              },
              {
                name:"Congress",votes:0,link:require('./img/INC_Logo.png')
              }
            ]
   
        };
        cooldownfc = (obj1) =>{
          this.setState({disabled: true})
          setTimeout(() => this.setState({ disabled: false }), 0);
          this.props.updated(obj1);
   }

    render() {
      return (
           <div className='voterboxinside'> {this.partylist.party.map(party => 
            <Votevalue votebtn={this.state.disabled}cooldownfc={this.cooldownfc} imglink={party.link} partyname={party.name} vote={party.votes} selected={true} ></Votevalue>
        
          )
          
          
          } </div>);
        
       
        
    }
}
  
  export default Insideevm1