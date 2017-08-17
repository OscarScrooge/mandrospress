const post = 'POST';
const get = 'GET';
const urlQueriesManager = 'http://localhost/mandmin/server/dataBase/queries/QueriesManager.php';
const urlSaveLocalFiles = 'http://localhost/mandmin/server/files/SaveLocalFiles.php';

/**
 *
 * @type {{dataPutRequest: string, type: string, resultNumber: number, section: string, condition: string, fields: string}}
 */
var dataInsert = {
    dataPutRequest: '',
    type: '',
    resultNumber: 0,
    section: '',
    condition: '',
    fields:'',
    order:''
};

var dataInserEmpty=dataInsert;
/**
 *
 * @type {{createContentFolder: call.createContentFolder, createCategorie: call.createCategorie, ajax: call.ajax}}
 */
var call = {

    /**
     *
     * @param path
     * @param callBack
     */
    createContentFolder: function (path, callBack) {

        var url = 'http://localhost/mandmin/server/files/CreateFolder.php';
        /**
         *
         * @type {{path: string, permissions: string, recursivePermissions: string}}
         * path include the folder name
         */
        var data = {
            path: path,
            permissions: '0777',
            recursivePermissions: 'true'
        };

        var object = {
            type: post,
            crossDomain: true,
            url: url,
            data: JSON.stringify(data)
        };

        this.ajax(object).then(function resolve(data) {
            console.log(data);
        }, function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },
    /**
     *
     * @param form
     */
    createCategorie: function (callBack) {


        var form = $('.categorie_form').serializeArray();
        if (form[0].value) {
            var dataPut = call.managerData(form);

            dataInsert.dataPutRequest=dataPut;
            dataInsert.type='insert';
            dataInsert.resultNumber=0;
            dataInsert.section='categories';
            dataInsert.fields='categorie,description';
            // var data = {
            //     dataPutRequest: dataPut,
            //     type: 'insert',
            //     resultNumber: 0,
            //     section: 'categories',
            //     condition: ''
            // };
            var object = {
                type: post,
                crossDomain: true,
                url: urlQueriesManager,
                data: JSON.stringify(dataInsert)
            };
            call.ajax(object).then(function resolve(data) {
                console.log(data);
                call.getCategories(callBack);
                $('.categorie_form')[0].reset();
                $('.err').hide();
                dataInsert=dataInserEmpty;
            }, function reject(reason) {
                console.log('algo salio mal');
                console.log(reason);
            });

        } else {
            $('.err').show();
        }

    },


    /**
     *
     * @param callBack
     */
    getCategories: function (callBack) {

        var dataRequest = {value: '*'};
        var array = [dataRequest];

        var request = call.managerData(array);

        var data = {
            dataPutRequest: request,
            type: 'select',
            resultNumber: '',
            section: 'categories',
            condition: '',
            order:'order by id desc'
        };

        var object = {
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data: JSON.stringify(data)
        };

        this.ajax(object).then(function resolve(data) {
            // console.log(data)
            callBack(JSON.parse(data));
        }, function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },

    /***
     *
     * @param callBack
     * @param limit
     * @param offset
     */
    getDocuments: function (callBack,limit,offset) {

        var dataRequest = {value: '*'};
        var array = [dataRequest];

        var request = call.managerData(array);

        var data = {
            dataPutRequest: request,
            type: 'select',
            resultNumber: 'limit '+ limit +' OFFSET '+ offset,
            section: 'alldocuments',
            condition: '',
            order:'order by id desc'
        };

        var object = {
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data: JSON.stringify(data)
        };

        this.ajax(object).then(function resolve(data) {
            // console.log(data);
            callBack(JSON.parse(data));
        }, function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },

    /**
     *
     * @param callBack
     */
    getCountDocuments(callBack){
        var dataRequest = {value: 'count(*)'};
        var array = [dataRequest];

        var request = call.managerData(array);

        var data = {
            dataPutRequest: request,
            type: 'select',
            resultNumber: '',
            section: 'alldocuments',
            condition: '',
            order:''
        };

        var object = {
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data: JSON.stringify(data)
        };

        this.ajax(object).then(function resolve(data) {
            var number=JSON.parse(data);
            // console.log(number[0][0]);
            callBack(number[0][0]);
        }, function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },

    /**
     *
     * @param filesArray
     * @param path
     * @param callBack
     */

    saveLocalFiles: function (filesArray, path, callBack,callBack2) {

        if (filesArray.length === 0) {
            alert('No ha documentos para agregar a la lista');
        } else {

            var formFiles = new FormData();

            for (var i=0;i<filesArray.length;i++) {
                formFiles.append('file' + i, filesArray[i]);
            }

            formFiles.append('path', path);

            var object={
                type: post,
                crossDomain: true,
                url: urlSaveLocalFiles,
                contentType:false,
                processData:false,
                data: formFiles
            };

            call.ajax(object).then(function resolve(resolve) {
                callBack(resolve,callBack2);
            }, function reject(reason) {
                console.log('Something is wrong');
                console.log(reason);
            });
        }
    },
    /**
     *
     * @param array
     * @param callBack
     */
    saveFilesInDB: function(array,callBack){

        var arr=JSON.parse(array);
        var object = {
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data: ''
        };

        arr.forEach(function (element) {
            dataInsert.fields='name,path,type';
            dataInsert.dataPutRequest=element.name+','+element.url+','+element.type;
            dataInsert.type='insert';
            dataInsert.section='documents';

            object.data= JSON.stringify(dataInsert);

            call.ajax(object).then(function resolve(resolve) {
                callBack(resolve);
               console.log(resolve);
                dataInsert=dataInserEmpty;
            }, function reject(reason) {
                console.log('Something is wrong');
                console.log(reason);
            });

        });
        $('.progress').hide();
        call.getDocuments(callBack);
    },
    /**
     *
     * @param array
     * @returns {string}
     */
    managerData: function (array) {
        var dataPutRequest = '';
        array.forEach(function (element) {
            dataPutRequest += element.value + ",";
        });

        return dataPutRequest.substr(0, (dataPutRequest.length) - 1);
    },

    /**
     *
     * @param arrayDocuments
     * @param arrayCategories
     * @param callBack
     */
    insertIntoRelDocumentsCategories: function (arrayDocuments,arrayCategories,callBack) {

        $('.progress').show();

        dataInsert.type='insert';
        dataInsert.fields='id_document,id_categorie';
        dataInsert.section='rel_categories_document';

        var object={
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data:''
        };

        arrayDocuments.forEach(function (document) {
            arrayCategories.forEach(function (categorie) {

                dataInsert.dataPutRequest=document.fileId+","+categorie;

                object.data=JSON.stringify(dataInsert);

                call.ajax(object).then(function resolve(resolve) {
                    call.getDocuments(callBack);
                    // console.log(resolve);
                }, function reject(reason) {
                    console.log('Something is wrong');
                    console.log(reason);
                });
            });
        });
        dataInsert=dataInserEmpty;
        $('.progress').hide();


    },


    /**
     *
     * @param data
     * @param url
     * @param type
     */
    ajax: function (object) {

        return new Promise(function (resolve, reject) {
            $.ajax(object).done(resolve).fail(reject);
        });


    }

};

module.exports = {
    call: call,
};

