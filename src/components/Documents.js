/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from "react";
import UploadFiles from "./UploadFiles";
import AddRemoveFromCategories from "./AddRemoveFromCategorie";
import FileListTable from "./FileListTable";
import api from "../../apis/api";
import $ from "jquery";

export default class Documents extends Component {

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

    changeStateSelectedFilesList(array){

        this.setState({
            selectedFiles:array
        },function () {
            console.log(JSON.stringify(this.state.selectedFiles));
        });
    }

    componentDidMount() {
        $('.progress').hide();
        api.call.getDocuments(this.stateFinalDocuments);
    }

    render() {

        return (
            <div className="">
                <div className="progress">
                    <h2 className="center red">Espere un momento</h2>
                    <div className="indeterminate"></div>
                </div>
                <div className="center"><h3>Documentos</h3></div>
                <UploadFiles changeStateDocuments={this.changeStateDocuments} documents={this.state.documents}
                             stateFinalDocuments={this.stateFinalDocuments}/>

                <div className="col s12">

                    <FileListTable titleTable="Archivo"
                                   finalList={this.state.finalDocuments}
                                   selectedFilesList={this.changeStateSelectedFilesList}
                                   sizeFinalList={this.state.sizeFinalDocuments}

                    />
                    <a className="waves-effect waves-light btn">Eliminar documento</a>
                </div>

                <div>
                    <AddRemoveFromCategories selectedDocuments={this.state.selectedFiles}/>
                </div>

            </div>
        );
    }

}
