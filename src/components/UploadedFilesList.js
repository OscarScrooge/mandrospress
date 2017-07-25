/**
 * Created by oscar on 7/25/17.
 */

import React,{Component} from 'react';

export default class UploadedFilesList extends Component{
    
    render(){
        return(
            <div className="uploadedFilesList">
                <ul className="collection with-header">
                    <li className="collection-item"><div>Archivo subido 1<a href="#!" className="secondary-content">
                        <input type="checkbox" id="archivo1" onChange={(e)=>this.handleChange()}/>
                        <label htmlFor="archivo1"></label>
                    </a></div></li>
                    <li className="collection-item"><div>Archivo subido 2<a href="#!" className="secondary-content">
                        <input type="checkbox" id="archivo2" onChange={(e)=>this.handleChange()}/>
                        <label htmlFor="archivo2"></label>
                    </a></div></li>
                    <li className="collection-item"><div>Archivo subido 2<a href="#!" className="secondary-content">
                        <input type="checkbox" id="archivo3" onChange={(e)=>this.handleChange()}/>
                        <label htmlFor="archivo3"></label>
                    </a></div></li>

                </ul>
            </div>
        );
    }
}
