import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;
 
  render () {
    return (
      <div>
        <custom-angular-web-component></custom-angular-web-component>
        
        <custom-react-web-component></custom-react-web-component>
      </div>
    );
  }
}
