/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from 'react';
import UploadFiles from './UploadFiles';
import AddRemoveFromCategories from './AddRemoveFromCategorie';
import FileListTable from './FileListTable';
import UploadedFilesList from './UploadedFilesList';

export default class Documents extends Component{



   render(){

        return(
            <div className="">
                <div className="center"><h3>Documentos</h3></div>
                <UploadFiles/>
                <UploadedFilesList/>
                <div>
                  <AddRemoveFromCategories/>
                    <a className="waves-effect waves-light btn">Añadir</a>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>
                <div className="col s12">
                     <FileListTable/>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>


            </div>
        );
    }

}
