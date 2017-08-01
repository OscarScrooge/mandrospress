/**
 * Created by oscar on 7/12/17.
 */
import React , {Component} from 'react';
import CategoriesTable from './CategoriesTable';
import api from '../../proxy/api';
let thisComponent;
export default class Categories extends Component{


    constructor(){
        super();
        thisComponent = this;
        this.state = {
            entriesCategoriesTable: []
        };
        this.changeCategoriesTableState = this.changeCategoriesTableState.bind(this);
    }

    changeCategoriesTableState(data){
        this.setState({
            entriesCategoriesTable : data
        });
    }

    handleSubmit(event){
        event.preventDefault();
        api.call.createCategorie(thisComponent.changeCategoriesTableState);
    }

    componentDidMount(){
        api.call.getCategories(this.changeCategoriesTableState);
    }

    deletedCategorie(){
        api.call.getCategories(thisComponent.changeCategoriesTableState);
    }

    render(){
        return(
            <div className="categories">
                <div className="center"><h3>Categorias</h3></div>
                <div className="col s12 m4 l4">
                    Añadir nueva categoria
                    <form className="categorie_form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field">
                            <input  id="categorie_name" type="text" className="validate" name="categorie_name"/>
                                <label htmlFor="categorie_name">Nombre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="description" className="materialize-textarea" name="description"></textarea>
                            <label htmlFor="description">Descripción</label>
                        </div>
                    </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Agregar
                        </button>
                    </form>
                </div>
                <div className="col s12 m8 l8">
                    <CategoriesTable categories={this.state.entriesCategoriesTable} deleteCategorieClick={this.deletedCategorie}/>
                </div>
            </div>
        );
    }

}
