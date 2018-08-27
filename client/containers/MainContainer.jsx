import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.jsx';
import Chat from '../components/CustomerService.jsx';
import ProductDisplay from '../components/ProductDisplayComponent.jsx';
import axios from 'axios'; 

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  
render() {
  return (
    <div>       
      <HeaderComponent />
      <ProductDisplay /> 
      <Chat />
    </div>
    );
  }
}

export default MainContainer;