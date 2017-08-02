/**
 * Created by oscar on 7/25/17.
 */

import React,{Component} from 'react';
import uploadesdFiles from '../../public/js/uploadedFiles';
import uid from 'uid';

export default class UploadedFilesList extends Component{


    handleClick(index,list){
       uploadesdFiles.list.removeFile(index,list,this.props.updateListFunction);
    }

    handleChange(){}

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
                            <input type="checkbox" id={index} onChange={(e)=>this.handleChange()}/>
                            <label htmlFor={index} ></label>
                        </a>
                        </div></li>
                    )}
                </ul>
            </div>
        );
    }
}
