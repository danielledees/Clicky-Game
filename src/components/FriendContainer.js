import React, { Component} from "react";

// The application should render different images (of your choice) to the screen. Each image should listen for click events.

// The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

// Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

// Once the user's score is reset after an incorrect guess, the game should restart.



class FriendContainer extends Component {
    state = {
        image: "",
        score: 0
        
    };

    //load images when componenet mounts
    componentDidMount() {
        this.loadImgs();
    }

    handleImgClick = event => {


    }
}


export default FriendContainer;