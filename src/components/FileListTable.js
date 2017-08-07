/**
 * Created by oscar on 7/25/17.
 */

import React, {Component} from 'react';
import uid from 'uid';

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
                        <th>{this.props.titleTable}</th>
                        <th>Categorias</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.finalList.docs.map(
                        (entry,index) =>   <tr key={uid()}>
                            <td>
                                <input type="checkbox" id={index} onChange={(e)=>this.handleChange}/>
                                <label htmlFor={index}></label>
                            </td>
                            <td>{entry.name}</td>
                            <td>cat. 1</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}