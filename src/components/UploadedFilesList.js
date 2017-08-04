/**
 * Created by oscar on 7/25/17.
 */

import React,{Component} from 'react';
import uploadesdFiles from '../../public/js/uploadedFiles';
import uid from 'uid';
import $ from 'jquery';

let array=[];

export default class UploadedFilesList extends Component{

    constructor(props){
        super(props);
        this.state= {
            checkedList: []
        }
        this.isCheckedStatus =  this.isCheckedStatus.bind(this);
        this.callBackFinaldocuments=this.props.finalDocumentsFunction;
    }

    handleClick(index,list){
       uploadesdFiles.list.removeFile(index,list,this.props.updateListFunction);
    }

    handleChange(id,name,type){


        var object={
            name: name,
            type: type
        };

        if($('input#'+id).is(':checked')) {

            array.push(object);
            this.callBackFinaldocuments(array);
        }else{
            var index = array.findIndex(i=>i.name===object.name);
            array.splice(index,1);
            this.callBackFinaldocuments(array);
        }

    }

    callBackFinaldocuments(array){

         // this.props.finalDocumentsFunction(JSON.stringify(array)).bind(this);
        this.setState({
            checkedList:array
        });
    }

    setState(){}

    isCheckedStatus(status){
        this.setState({
            isChecked: status
        });
    }

    render(){
        return(
            <div className="uploadedFilesList">
                <ul className="collection with-header">
                    {this.props.filesList.map(
                        (entry,index)=> <li key={uid()} className="collection-item"><div>{entry.name}
                            <a href="#" className="secondary-content">
                                <i onClick={(e)=>this.handleClick(index,this.props.filesList)} className="small material-icons waves-effect waves-light black-text">clear</i>
                            </a>
                        <a href="#" className="secondary-content">
                            <input type="checkbox" id={index} onChange={(e)=>this.handleChange(index,entry.name,entry.type)}/>
                            <label htmlFor={index} ></label>
                        </a>
                        </div></li>
                    )}
                </ul>
            </div>
        );
    }
}
