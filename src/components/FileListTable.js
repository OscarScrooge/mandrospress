/**
 * Created by oscar on 7/25/17.
 */

import React, {Component} from 'react';

export default class FileListTable extends Component{


    render() {

        return (
            <div className="">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="test8" disabled="disabled"/>
                            <label htmlFor="test8"></label>
                        </th>
                        <th>Archivo</th>
                        <th>Categorias</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" id="uparchivo1" onChange={(e)=>this.handleChange()}/>
                            <label htmlFor="uparchivo1"></label>
                        </td>
                        <td>archivo 1</td>
                        <td>cat. 1</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" id="uparchivo2" onChange={(e)=>this.handleChange()}/>
                            <label htmlFor="uparchivo2"></label>
                        </td>
                        <td>archivo 2</td>
                        <td>cat. 2</td>

                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" id="uparchivo3" onChange={(e)=>this.handleChange()}/>
                            <label htmlFor="uparchivo3"></label>
                        </td>
                        <td>archivo 3</td>
                        <td>cat. 3</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}