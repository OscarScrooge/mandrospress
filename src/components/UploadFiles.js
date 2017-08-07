/**
 * Created by oscar on 7/25/17.
 */

import React ,{Component} from 'react';
import UploadedFilesList from './UploadedFilesList';
import uploadedFiles from '../../public/js/uploadedFiles';


export default class UploadFiles extends Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        uploadedFiles.list.fileList(this.props.changeStateDocuments);
    }


    render(){

        return(
            <div className="col s12">
                <form action="#">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input onChange={this.handleChange} type="file" multiple/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                        </div>
                    </div>
                    <UploadedFilesList filesList={this.props.documents} changeStateDocuments={this.props.changeStateDocuments}
                                       finalDocumentsFunction={this.props.finalDocumentsFunction}/>
                </form>
            </div>
        );
    }

}