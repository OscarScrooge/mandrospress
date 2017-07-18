/**
 * Created by oscar on 7/12/17.
 */

import React, {Component} from 'react';


export default class CategoriesTable extends Component{

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
                    <tr>
                        <td>Categoria 1</td>
                        <td>Desc. 1</td>
                        <td>
                            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">clear</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Categoria 2</td>
                        <td>Desc. 2</td>
                        <td>
                            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">clear</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Categoria 3</td>
                        <td>Desc. 3</td>
                        <td>
                            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">clear</i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
