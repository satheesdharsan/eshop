import React, { Component } from 'react';
import Auxillary from './Auxillary';

class Nav extends Component {
    render() {
      return (
        <Auxillary>
          <div className="fixed-nav">
    
            <h1>Farm eShop</h1>
         
            <div className="Header-input">
              <select className="select-css">
                <option value="All">All</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
              </select>
            <input type="text" name="searchitem" id="searchitem" placeholder="Search"  />
            <i className="ion-ios-search icon-small-black search-icon-position"></i>
            </div>
            <nav>
                  <ul className="main-nav">
                     <li>
                     <a href="#" >Sign in</a>
                     </li>
                     <li>
                     <i className="ion-ios-home icon-small "></i>
                      <a href="#about" >Home</a>
                     </li>
                     <li>
                     <i className="ion-ios-pricetag icon-small "></i>
                      <a href="#about" >Orders</a>
                     </li>
                     <li>
                       <i className="ion-ios-basket icon-small"></i>
                       <a href="#testimonals" >Basket</a>
                     </li>
                     <li>
                      <i className="ion-ios-call icon-small"></i>
                       <a href="#contact" >Contact Us</a>
                     </li>
                  </ul>
           </nav>
      
           </div>
           </Auxillary>
      );
    }
  }
  
  export default Nav;
  