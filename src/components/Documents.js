/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from 'react';
import UploadFiles from './UploadFiles';
import AddRemoveFromCategories from './AddRemoveFromCategorie';
import FileListTable from './FileListTable';
import api from '../../proxy/api';

export default class Documents extends Component{

    constructor(){
        super();
        this.state = {
            finalList:[]
        };
        this.changeStateFinalList=this.changeStateFinalList.bind(this);
    }

    componentWillMount(){
        api.call.createContentFolder('../../content/documentos',null);
    }

    changeStateFinalList(data){
        this.setState(
            {
                finalList:data
            }
            );
    }

   render(){

        return(
            <div className="">
                <div className="center"><h3>Documentos</h3></div>
                <UploadFiles/>
                <div>
                  <AddRemoveFromCategories changeStateList={this.changeStateFinalList}/>
                </div>
                <div className="col s12">
                     <FileListTable titleTable="Archivo" finalList={this.state.finalList}/>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>


            </div>
        );
    }

}
