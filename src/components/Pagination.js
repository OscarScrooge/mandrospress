/**
 * Created by oscar on 8/16/17.
 */
import React,{Component} from 'react';
import api from '../../apis/api';
import uid from 'uid';
import $ from 'jquery';

let startIndexGlobal=0;
export default class Pagination extends Component{

    constructor(){
        super();
        this.state = {
            totalRows:1,
            totalPages:[]
        };
        this.updateTotalRows=this.updateTotalRows.bind(this);
        this.getPages=this.getPages.bind(this);
    }

    updateTotalRows(number){
        this.setState(
            {
                totalRows: Math.ceil(number)
            },this.getPages
        );
    }

    updateTotalPages(array){
        this.setState({
            totalPages:array
        });
    }

    componentDidMount(){
      api.call.getCountDocuments(this.updateTotalRows);
    }

    getPages(){
       var array=[];
        var i=6;
        while(i<this.state.totalRows){
            array.push(i);
            i+=6;
        }
        this.updateTotalPages(array);
    }

    changePage(startIndex,id){
        // $("li.active").removeClass("active");
        // $("li#"+id).addClass("active");
        api.call.getDocuments(this.props.stateFinalDocuments,6,startIndex);
        startIndexGlobal=0;
    }

    render(){

        return(
            <div className="center">
            <ul className="pagination">
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="waves-effect active" id="0" onClick={(e)=>this.changePage(startIndexGlobal,0)}><a href="#!">1</a></li>
                {this.state.totalPages.map((entry,index)=>
                    <li key={uid()} id={index+1} className="waves-effect" onClick={(e)=>this.changePage(startIndexGlobal+=6,index+1)}>
                        <a href="#!">{index+2}</a>
                    </li>)}
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
            </div>
        );

    }

}


