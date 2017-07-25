/**
 * Created by oscar on 7/12/17.
 */
import React , {Component} from 'react';
import CategoriesTable from './CategoriesTable';

export default class Categories extends Component{

    render(){
        return(
            <div className="categories">
                <div className="center"><h3>Categorias</h3></div>
                <div className="col s12 m4 l4">
                    Añadir nueva categoria
                    <div className="row">
                        <div className="input-field">
                            <input  id="categorie_name" type="text" className="validate"/>
                                <label for="categorie_name">Nombre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="descripcion" className="materialize-textarea"></textarea>
                            <label for="descripcion">Descripción</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn black">Aceptar</a>
                </div>
                <div className="col s12 m8 l8">
                    <CategoriesTable/>
                </div>
            </div>
        );
    }

}
