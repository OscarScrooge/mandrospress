/**
 * Created by oscar on 7/12/17.
 */

import React, {Component} from 'react';
import apiDelete from '../../proxy/apiDelete';

export default class CategoriesTable extends Component{

    handleClick(id){
        apiDelete.delete.categorie(id,this.props.deleteCategorieClick);
    }

    render(){
        return(
            <div className="view_categories">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Descripción</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.categories.map((entry) => <tr key={entry.id} id={entry.id}>
                        <td>{entry.categorie}</td>
                        <td>{entry.description}</td>
                        <td>
                            <a className="btn-floating btn-large waves-effect waves-light red" onClick={(e)=>this.handleClick(entry.id)}>
                                <i className="material-icons">clear</i>
                            </a>
                        </td>
                    </tr>)}

                    </tbody>
                </table>
            </div>
        );
    }

}
