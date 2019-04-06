import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./style.css";
import { timingSafeEqual } from 'crypto';

// The application should render different images (of your choice) to the screen. Each image should listen for click events.

// The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

// Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

// Once the user's score is reset after an incorrect guess, the game should restart.

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    highScore: 0,
    friends,
    cardArray: [],
    unclicked: friends,
    message: "Click an image to begin!"
  };

  

  shuffleCards () {
    // Math.floor((Math.random() * 13) + 1);
    
  }

  handleClick = (id) => {
    console.log("Clicked!!");
    console.log(id);
    //find if image clicked id to see if it's been clicked yet
    const card = this.state.unclicked.find(item => item.id ===id);
    //if yes then restart game
    if(card === undefined) {
      console.log("loser")
      this.setState({
        score: 0
        
      })
    }
    else {
      //filter thru array if an image has not been clicked update score
      const newCard = this.state.unclicked.filter(item => item.id !== id);
      console.log("correct")
      this.setState({
        score: this.state.score + 1,
        unclicked: newCard
      })

    }

    // if (this.state.cardArray.includes(id)) {
    //   console.log("You Lose!")
      
    // }
    // else {
    //   console.log("update score")

    //    this.setState((prevState, props) => {
    //     return {cardArray: prevState.cardArray.push(id), score:this.state.score +1};
      
    //   // this.setState((prevState, props) => {
    //   //   return {score:this.state.score +1};
    //   // })
      
    //   })
    // }
  
  }



  render() {
    return (
      <div>
        <Navbar 
      score={this.state.score}
      />
       <Wrapper>
       <Jumbotron />
       {this.state.friends.map(friend => (
         <FriendCard
           id={friend.id}
           key={friend.id}
           image={friend.image}
           handleClick = {this.handleClick}
         />
       ))}
        
    </Wrapper>  
    </div>
  
   
    );
  }
}




export default App;
