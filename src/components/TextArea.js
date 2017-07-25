/**
 * Created by oscar on 7/25/17.
 */

import React ,{Component} from 'react';

export default class TextArea extends Component{

    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Contenido</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}
