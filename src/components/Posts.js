/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from 'react';
import UploadFiles from './UploadFiles';
import AddRemoveFromCategories from './AddRemoveFromCategorie';
import FileListTable from './FileListTable';
import UploadedFilesList from './UploadedFilesList';
import TextArea from './TextArea';
import $ from 'jquery';
import api from '../../apis/api';

export default class Posts extends Component{

    constructor() {
        super();
        this.state = {
            documents: [],
            finalDocuments: {
                docs: []
            },
            sizeFinalDocuments:0,
            selectedFiles: []
        };

        this.changeStateDocuments = this.changeStateDocuments.bind(this);
        this.stateFinalDocuments = this.stateFinalDocuments.bind(this);
        this.changeStateSelectedFilesList= this.changeStateSelectedFilesList.bind(this);
        this.stateDocsWithCategories=this.stateDocsWithCategories.bind(this);
    }

    changeStateDocuments(documents) {
        this.setState(
            {
                documents: documents,
            }
        );
    }

    stateFinalDocuments(docs) {

        this.setState(
            {
                finalDocuments: {
                    docs: docs
                },
                sizeFinalDocuments:docs.length

            }
            , function () {
                var array = [];
                this.changeStateDocuments(array);
            });
    }

    stateDocsWithCategories(docs){
        this.setState({
            finalDocuments: {
                docs: docs
            },
            sizeFinalDocuments:docs.length
        });
    }

    changeStateSelectedFilesList(array){

        this.setState({
            selectedFiles:array
        },function () {
            console.log(JSON.stringify(this.state.selectedFiles));
        });
    }

    componentDidMount() {
        $('.progress').hide();
        api.call.getDocuments(this.stateFinalDocuments,6,0);
    }


    render(){

        return(
            <div className="">
                <div className="center"><h3>Posts</h3></div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="título" type="text" className="validate"/>
                            <label htmlFor="título">título</label>
                    </div>
                </div>
                <TextArea/>
                <h6>Adjuntar archivos</h6>
                <UploadFiles changeStateDocuments={this.changeStateDocuments} documents={this.state.documents}
                             stateFinalDocuments={this.stateFinalDocuments}/>
                {/*<UploadedFilesList/>*/}
                <div>
                    <AddRemoveFromCategories
                        newFiles={this.stateDocsWithCategories}
                        selectedDocuments={this.state.selectedFiles}/>
                </div>
                <div className="col s12">
                    <FileListTable titleTable="Archivo"
                                   finalList={this.state.finalDocuments.docs}
                                   selectedFilesList={this.changeStateSelectedFilesList}
                                   sizeFinalList={this.state.sizeFinalDocuments}
                                   stateFinalDocuments={this.stateFinalDocuments}

                    />
                    <a className="waves-effect waves-light btn">Eliminar documento</a>
                </div>


            </div>
        );
    }

}
