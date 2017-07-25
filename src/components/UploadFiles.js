/**
 * Created by oscar on 7/25/17.
 */

import React ,{Component} from 'react';

export default class UploadFiles extends Component{

    render(){

        return(
            <div className="col s12">
                <form action="#">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" multiple/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}