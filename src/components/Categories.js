/**
 * Created by oscar on 7/12/17.
 */
import React , {Component} from 'react';
import CategoriesTable from './CategoriesTable';
import api from '../../proxy/api';

export default class Categories extends Component{

    handleSubmit(event){
        api.call.createCategorie(this);
    }

    render(){
        return(
            <div className="categories">
                <div className="center"><h3>Categorias</h3></div>
                <div className="col s12 m4 l4">
                    Añadir nueva categoria
                    <form className="" onSubmit={this.handleSubmit}>
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
                        <button className="btn waves-effect waves-light" type="submit" name="action">Aceptar
                        </button>
                    </form>
                </div>
                <div className="col s12 m8 l8">
                    <CategoriesTable/>
                </div>
            </div>
        );
    }

}
