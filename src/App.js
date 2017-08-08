import React, { Component } from 'react';
import SideNav from './components/SideNav';
import '../public/css/viewfinder.css';
import '../public/css/materialize.min.css';
import '../public/css/sideNav.css';
import '../public/css/categories.css';
import '../public/js/materialize.min';

class App extends Component {

    constructor(){
        super();
        this.state = {
            mainComponent :  ''
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(component){
        this.setState({
            mainComponent : component
        });
    }



  render() {
    return (
      <div className="App">
          <div className="navbar-fixed ">

              <div className="nav-wrapper black">
                  <a href="#!" className="brand-logo">Logo</a>
              </div>

          </div>

          <div className="row">


              <div  className="col s12 m2 l2 sidenav_container">
                    <SideNav changeComponentState={this.changeState}/>
              </div>


              <div className="col s12 l10 m10 viewfinder">
                  {this.state.mainComponent}
              </div>




          </div>
      </div>
    );
  }
}

export default App;
