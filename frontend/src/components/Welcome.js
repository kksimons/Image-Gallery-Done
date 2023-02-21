import React from "react";
import { Container, Button } from "react-bootstrap";

const Welcome = () => (
    <div className="jumbotron">
    <h1>Image Gallery</h1>
    <p>
      This is a simple application that retrieves photos using Unsplash API. 
      In order to start, enter any search term in the input field. 
    </p>
    <p>
      <Button variant="primary" href="http://unsplash.com" 
      target="_blank">
        Learn More
      </Button>
    </p>
    </div>
);

export default Welcome;