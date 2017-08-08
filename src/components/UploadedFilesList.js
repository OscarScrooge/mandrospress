/**
 * Created by oscar on 7/25/17.
 */

import React,{Component} from 'react';
import uploadesdFiles from '../../public/js/uploadedFiles';
import api from '../../apis/api';
import uid from 'uid';

let pathToUpload;
export default class UploadedFilesList extends Component{

    constructor(){
        super();
        this.salvar=this.salvar.bind(this);
    }

    componentWillMount(){
        var d= new Date();
        var folderDate = d.getFullYear()+''+d.getMonth()+''+d.getDay();
        api.call.createContentFolder('../../content',null);
        api.call.createContentFolder('../../content/documentos',null);
        api.call.createContentFolder('../../content/documentos/'+folderDate, null);
        pathToUpload = '../../content/documentos/'+folderDate+'/';
    }

    handleClick(index,list){
       uploadesdFiles.list.removeFile(index,list,this.props.changeStateDocuments);
    }

    saveFilesInLocal(){
        api.call.saveLocalFiles(this.props.filesList,pathToUpload,null)
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
                        </div></li>
                    )}
                    <a className="waves-effect waves-light btn" onClick={(e)=>this.saveFilesInLocal()}>Aceptar</a>
                </ul>
            </div>
        );
    }
}

/*
 this.props.finalDocumentsFunction(this.props.filesList)
 */