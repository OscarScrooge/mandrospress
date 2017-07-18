/**
 * Created by oscar on 7/17/17.
 */

import React, {Component} from 'react';
import CategoriesTable from './CategoriesTable';
import AddToCategories from './AddToCategories';

export default class Documents extends Component{



   render(){

        return(
            <div className="">
                <div className="col s12 m4 l4">
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
                <div className="col s12 m8 l8">
                     <CategoriesTable action={<AddToCategories/>}/>
                </div>


            </div>
        );
    }

}
