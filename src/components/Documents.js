/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from "react";
import UploadFiles from "./UploadFiles";
import AddRemoveFromCategories from "./AddRemoveFromCategorie";
import FileListTable from "./FileListTable";

export default class Documents extends Component {

    constructor() {
        super();
        this.state = {
            documents: [],
            finalDocuments: {
                docs: []
            },
        };

        this.changeStateDocuments = this.changeStateDocuments.bind(this);
        this.stateFinalDocuments = this.stateFinalDocuments.bind(this);
    }

    changeStateDocuments(documents) {
        this.setState(
            {
                documents: documents,
            }
        );
    }

    stateFinalDocuments(docs){

        this.setState(
            {
                finalDocuments:{
                    docs:docs
                }
            }
        ,function () {
                var array=[];
                this.changeStateDocuments(array);
            });
    }

    render() {

        return (
            <div className="">
                <div className="center"><h3>Documentos</h3></div>
                <UploadFiles  changeStateDocuments={this.changeStateDocuments} documents={this.state.documents} finalDocumentsFunction={this.stateFinalDocuments}/>

                <div className="col s12">
                    <FileListTable titleTable="Archivo" finalList={this.state.finalDocuments}/>
                    <a className="waves-effect waves-light btn">Eliminar documento</a>
                </div>

                <div>
                    <AddRemoveFromCategories updateCats={this.changeStateCategories} selectedDocuments={this.state.documents}/>
                </div>


            </div>
        );
    }

}
