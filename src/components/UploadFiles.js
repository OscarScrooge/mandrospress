/**
 * Created by oscar on 7/25/17.
 */

import React ,{Component} from 'react';
import UploadedFilesList from './UploadedFilesList';
import uploadedFiles from '../../public/js/uploadedFiles';

export default class UploadFiles extends Component{

    constructor(props){
        super(props);
        this.state = {
            uploadedFilesList: []
        };
        this.updateList = this.updateList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updateList(data) {
        this.setState(
            {
                uploadedFilesList: data
            }
        );
    }


    handleChange(event){
        uploadedFiles.list.fileList(this.updateList);
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
                    <UploadedFilesList filesList={this.state.uploadedFilesList} updateListFunction={this.updateList}/>
                </form>
            </div>
        );
    }

}