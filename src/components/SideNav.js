/**
 * Created by oscar on 7/12/17.
 */
import React, { Component } from 'react';
import Categories from './Categories';
import Documents from './Documents';
import Media from './Media';
import Posts from './Posts';
import $ from 'jquery';


export default class SideNav extends Component{




    componentDidMount(){
        $(".button-collapse").sideNav();
    }

    handleClick(component) {
        this.props.changeComponentState(component);
    }


    autoClick(liElement){
        liElement.click();
    }

    render(){


        return(
            <div className="SideNav">
              <ul id="slide-out" className="side-nav fixed">
                   <li ref={this.autoClick} onClick={(e)=>this.handleClick(<Categories/>).bind(this)}><a href="#!">Categorias</a></li>
                   <li onClick={(e)=>this.handleClick(<Documents/>).bind(this)}><a href="#!">Documentos</a></li>
                   <li onClick={(e)=>this.handleClick(<Media/>).bind(this)}><a href="#!">Media</a></li>
                   <li onClick={(e)=>this.handleClick(<Posts/>).bind(this)}><a href="#!">Posts</a></li>
              </ul>
              <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        );
    }

}