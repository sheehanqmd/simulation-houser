import React, { Component } from 'react';
import Axios from 'axios';
// import store {}




class Wizard extends Component {
   constructor(props) {
     super(props);
     this.state = {
       name: "",
       address: "",
       city: "",
       state: "",
       zip: ""
     };
    
     this.handleChange = this.handleChange.bind(this);
    }
   

   makePost(e) {
     axios.post("/api/wizard/",{
       name: this.state.name,
       address: this.state.address,
       city: this.state.city,
       state: this.state.state,
       zip: this.state.zip
     })
   
   .then(response => {
     this.setState({
       name: res.data.name,
       address: res.data.address,
       city: res.data.city,
       state: res.data.state,
       zip: res.data.zip
     })
     .catch(error => {
       console.log(error);

     });
    }
   


  // handleChange(e){
  //   const ({name: "", address: "", city: "", state: "", zip: ""}); = e.target
  //   this.setState({e.target: value});
  

        render() 

          return( 
            <div className="Wizard">
              <form className='form'>
                <h2>Property Name</h2>
                <input type="text" onChange={(e.target.value)}/>
                <h2>Address</h2>
                <input type="text" onChange={(e.target.value)}/>
                <h2>City</h2>
                <input type="text" onChange={(e.target.value)}/>
                <h2>State</h2>
                <input type="text" onChange={(e.target.value)}/>
                <h2>Zip</h2>
                <input type="text" onChange={(e.target.value)}/>
                <button id="submit" onClick={event => this.makePost(this.state)}>Submit</button>
              </form>
            </div>
          );
        }
      }
      
  
export default Wizard;