/**
 * Created by oscar on 8/16/17.
 */
import React,{Component} from 'react';
import api from '../../apis/api';
import uid from 'uid';
import $ from 'jquery';

var indexes=[];
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

        switch (this.props.section){
            case 'documents':
                api.call.getCountDocuments(this.updateTotalRows);
                break;
            case 'categories':
                api.call.getCountCategories(this.updateTotalRows);
                break;
            default:
                break;
        }

    }

    getPages(){
       var array=[];
        var i=this.props.index;
        while(i<this.state.totalRows){
            array.push(i);
            indexes.push(i);
            i+=this.props.index;
        }
        this.updateTotalPages(array);
    }

    changePage(startIndex,id){
        // $("li.active").removeClass("active");
        // $("li#"+id).addClass("active");
        switch (this.props.section){
            case 'documents':
                api.call.getDocuments(this.props.stateFinalDocuments,this.props.index,startIndex);
                break;
            case 'categories':
                api.call.getCategories(this.props.stateFinalDocuments,this.props.index,startIndex);
                break;
            default:
                break;
        }

        // startIndexGlobal=0;
    }

    render(){

        return(
            <div className="center">
            <ul className="pagination">
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="waves-effect active" id="0" onClick={(e)=>this.changePage(0,0)}><a href="#!">1</a></li>
                {this.state.totalPages.map((entry,index)=>
                    <li key={uid()} id={index+1} className="waves-effect" onClick={(e)=>this.changePage(indexes[index],index+1)}>
                        <a href="#!">{index+2}</a>
                    </li>)}
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
            </div>
        );

    }

}


