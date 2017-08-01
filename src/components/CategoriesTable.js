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

                                <i onClick={(e)=>this.handleClick(entry.id)} className="small material-icons waves-effect waves-light">delete</i>

                        </td>
                    </tr>)}

                    </tbody>
                </table>
            </div>
        );
    }

}
