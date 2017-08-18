/**
 * Created by oscar on 7/25/17.
 */

import React, {Component} from 'react';
import Pagination from './Pagination';
import uid from 'uid';

var array=[];
export default class FileListTable extends Component{


    constructor(){
        super();
        this.state={
            selectedFiles:[],
            isCheckedAux:[],
            isChecked: false,
            flag:false
        };
        this.changeSelectedFiles=this.changeSelectedFiles.bind(this);
        this.currentCheckState=this.currentCheckState.bind(this);
        // this.isCheckedAuxState=this.isCheckedAuxState.bind(this);

    }




    changeSelectedFiles(array) {
        this.setState({
            selectedFiles:array
        },function () {
            this.props.selectedFilesList(this.state.selectedFiles);
        });

    }


    currentCheckState(check,index){
        var arr=this.state.isCheckedAux;

        for(var i=0;i<this.state.isCheckedAux.length;i++){

            if(i==index){
                arr[i]=check;
            }
        }
        this.setState({
            isCheckedAux:arr
        });
    }


    handleChange(event,idFile,path){


        if(event.target.checked){
            var object={
                fileId:event.target.id,
                filePath:path
            };
            array.push(object);
            this.currentCheckState(false,event.target.value);
        }else{
            var index=array.findIndex(element=> element.fileId===idFile);
            array.splice(index,1);
            this.currentCheckState(true,event.target.value);
        }
        this.changeSelectedFiles(array);
    }

    componentDidUpdate(){


            if(this.state.flag){
                return;
            }
            var sizeIsCheckedAux=this.props.sizeFinalList;
            var array=[];
            for(var i=0;i<sizeIsCheckedAux;i++){
                array.push(true);
            }
            this.setState({
                isCheckedAux:array,
                flag:true
            },function () {
                return;
            });

    }



    render() {

        return (
            <div className="">
                <Pagination  stateFinalDocuments={this.props.stateFinalDocuments}
                             index={6}
                             section={'documents'}
                />
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
                    {this.props.finalList.map(
                        (entry,index) =>   <tr key={uid()}>
                            <td>
                                <input type="checkbox" id={entry.id}
                                       value={index}
                                       onChange={(e)=>this.handleChange(e,entry.id,entry.path)}
                                       checked={this.state.isChecked===this.state.isCheckedAux[index]}
                                />
                                <label htmlFor={entry.id}></label>
                            </td>
                            <td>{entry.name}</td>
                            <td>{entry.categorie}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <Pagination
                    stateFinalDocuments={this.props.stateFinalDocuments}
                    index={6}
                    section={'documents'}
                />
            </div>
        );
    }
}