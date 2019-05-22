import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='background'>Hello</div>
    )
  }

   constructor() {
    super()

    this.state = {
    userprofiles : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/userprofiles')
    .then (response => response.json())
    .then(json => console.log(json))
    // .then(json => {
    //   this.setState({
    //     receipes:json
    //   })
    }

 
render(){
   return(
     <h1>app</h1>
   )
}



}

  // render(){
  //   let receipes = this.state.receipes
  //   let receipeItems = receipes.map((receipe) => {
  //     return(
  //       <div>
  //       <li>{receipe.category}</li>
  //       <li>{receipe.title}</li>
  //       <li>{receipe.description}</li>
  //       <li>{receipe.mediaurl}</li>
  //       <li>{receipe.imageUrl}</li>
  //       </div>
  //     )
  //   })
  //   return (
//        <ul>{receipeItems}</ul>
//     )
//   }

// }
// }

export default App;
