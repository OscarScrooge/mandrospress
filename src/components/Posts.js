/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from 'react';
import UploadFiles from './UploadFiles';
import AddRemoveFromCategories from './AddRemoveFromCategorie';
import FileListTable from './FileListTable';
import UploadedFilesList from './UploadedFilesList';
import TextArea from './TextArea';

export default class Posts extends Component{



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
                <UploadFiles/>
                <UploadedFilesList/>
                <div>
                    <AddRemoveFromCategories/>
                    <a className="waves-effect waves-light btn">Añadir</a>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>
                <div className="col s12">
                    <FileListTable titleTable="Post"/>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>


            </div>
        );
    }

}
