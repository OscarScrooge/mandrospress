/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from "react";
import UploadFiles from "./UploadFiles";
import AddRemoveFromCategories from "./AddRemoveFromCategorie";
import FileListTable from "./FileListTable";
import api from "../../proxy/api";

export default class Documents extends Component {

    constructor() {
        super();
        this.state = {
            documents: [],
            finalDocuments: [],
            finalList: []

        }
        this.changeStateDocuments = this.changeStateDocuments.bind(this);
        // this.stateFinalDocuments = this.stateFinalDocuments.bind(this);
    }

    componentWillMount() {
        api.call.createContentFolder('../../content/documentos', null);
    }

    changeStateDocuments(documents) {
        this.setState(
            {
                documents: documents,
            }
        );
    }

    stateFinalDocuments(docs){
        console.log('finales '+ JSON.stringify(docs));
        this.setState(
            {
                finalDocuments: docs
            }
        );
    }


    render() {

        return (
            <div className="">
                <div className="center"><h3>Documentos</h3></div>
                <UploadFiles updateDocs={this.changeStateDocuments} finalDocumentsFunction={this.stateFinalDocuments}/>
                <div>
                    <AddRemoveFromCategories updateCats={this.changeStateCategories} selectedDocuments={this.state.documents}/>
                </div>
                <div className="col s12">
                    <FileListTable titleTable="Archivo" finalList={this.state.finalList}/>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>


            </div>
        );
    }

}
