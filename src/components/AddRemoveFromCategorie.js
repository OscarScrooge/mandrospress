/**
 * Created by oscar on 7/25/17.
 */

import React, {Component} from 'react';
import $ from 'jquery';

export default class AddRemoveFromCategorie extends Component{

    componentDidMount(){
        $('select').material_select();
    }
    
    render(){
        
        return(
            <div className="input-field col s8">
                <select multiple>
                    <option value="" disabled selected>Categorias</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Materialize Multiple Select</label>
            </div>
        );
    }
    
}