/**
 * Created by oscar on 8/1/17.
 */

var list=[];

var files ={

    /**
     *
     * @param callBack
     */
    fileList: function (callBack) {

        var files = $('input:file')[0].files;
        var list = [];
        for (var i = 0; i <=files.length-1; i++) {

            list.push(files[i]);

        }
         callBack(list);
    },

    /**
     *
     * @param id
     * @param list
     * @param callBack
     */
    removeFile: function(id,list,callBack){
         list.splice(id,1);
        if(callBack){
            callBack(list);
        }

    },

    getFinalList(list,callBack){
        callBack(list);
    },

};


module.exports = {

    list: files

};