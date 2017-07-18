import React, { Component } from 'react';
import SideNav from './components/SideNav';

class App extends Component {

    constructor(){
        super();
        this.state = {
            mainComponent :  ''
        };
        this.changeState = this.changeState.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return (nextProps.mainComponent !== this.props.mainComponent);
    // }

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
