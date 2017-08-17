/**
 * Created by oscar on 7/25/17.
 */

import React, {Component} from 'react';
import $ from 'jquery';
import uid from 'uid';
import api from '../../apis/api';
import apiDelete from '../../apis/apiDelete';

export default class AddRemoveFromCategorie extends Component{

    constructor(props){
        super(props);
        this.state = {
            categoriesList: []
        };
        this.getCatList = this.getCatList.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.deleteFromCategorie=this.deleteFromCategorie.bind(this);
    }

    getCatList(data){
        this.setState(
            {
                categoriesList: data
            }
            ,this.initializeSelect);
    }

    initializeSelect(){
        $('select').material_select();
    }
    componentDidMount(){
        api.call.getCategories(this.getCatList);
    }

    handleChange(){
    }

    handleClick(){
        let arrayDocs= this.props.selectedDocuments;
        let arrayCats=$('select').val();
        let callBack=this.props.newFiles;
        api.call.insertIntoRelDocumentsCategories(arrayDocs,arrayCats,callBack);
        this.getCatList(this.state.categoriesList);
    }

    deleteFromCategorie(){
        let arrayDocs= this.props.selectedDocuments;
        let arrayCats=$('select').val();
        let callBack=this.props.newFiles;
        apiDelete.delete.deleteFromCategories(arrayDocs,arrayCats,callBack);
        this.getCatList(this.state.categoriesList);
    }


    render(){
        
        return(
            <div>
            <div className="input-field col s8">
                <select className="multipleSelect" multiple value={[]} onChange={this.handleChange}>
                    <option  disabled >Categorias</option>
                    {this.state.categoriesList.map((entry)=>
                        <option key={uid()} id={entry.id} value={entry.id}>{entry.categorie}</option>)}
                </select>
            </div>
                <a className="waves-effect waves-light btn"
                   onClick={(e)=this.handleClick}>Añadir a categorias</a>
                <a className="waves-effect waves-light btn"
                   onClick={(e)=>this.deleteFromCategorie}>Eliminar de categorias</a>

            </div>
        );
    }
    
}