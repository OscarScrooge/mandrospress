/**
 * Created by oscar on 8/1/17.
 */
const post='post';
const urlQueriesManager = 'http://localhost/mandmin/server/dataBase/queries/QueriesManager.php';
const urlDeleteFileFromLocal = 'http://localhost/mandmin/server/files/DeleteFileFromLocal.php';
/**
 *
 * @type {{dataPutRequest: string, type: string, resultNumber: number, section: string, condition: string, fields: string}}
 */
var data = {
    dataPutRequest: '',
    type: '',
    resultNumber: 0,
    section: '',
    condition: '',
    fields:'',
    order:''
};

var dataEmpty=data;



var dataToDelete={

    /**
     *
     * @param id
     * @param callBack
     */
    deleteCategorie: function (id,callBack) {
        var data = {
            dataPutRequest: '',
            type: 'delete',
            resultNumber: 0,
            section: 'categories',
            condition:'id='+id
        };

        var object = {
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data: JSON.stringify(data)
        };

        this.ajax(object).then(function resolve(data) {

            if(!callBack){
                console.log(data);
            }else{
                console.log(data);
                callBack(data);
            }


        },function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },

    /**
     *
     * @param arrayDocuments
     * @param arrayCategories
     * @param apiGetDocuments
     * @param callBack
     */
    deleteFromCategories: function (arrayDocuments,arrayCategories,apiGetDocuments,callBack) {

        $('.progress').show();

        data.type='delete';
        data.section='rel_categories_document';


        var object={
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data:''
        };

        arrayDocuments.forEach(function (document) {
            arrayCategories.forEach(function (categorie) {

                data.condition='id_categorie='+categorie+' and '+'id_document='+document.fileId;

                object.data=JSON.stringify(data);

                dataToDelete.ajax(object).then(function resolve(resolve) {
                    apiGetDocuments(callBack,6,0);
                    // data=dataEmpty;
                    // console.log(resolve);
                }, function reject(reason) {
                    console.log('Something is wrong');
                    console.log(reason);
                });
            });
        });
        data=dataEmpty;
        $('.progress').hide();


    },

    /**
     *
     * @param arrayDocuments
     * @param apiGetDocuments
     * @param callBack
     */
    deleteDocumentFromDB(arrayDocuments,apiGetDocuments,callBack){
        $('.progress').show();

        data.type='delete';
        data.section='documents';


        var object={
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data:''
        };

        arrayDocuments.forEach(function (document) {

                data.condition='id='+document.fileId;
                object.data=JSON.stringify(data);
                dataToDelete.ajax(object).then(function resolve(resolve) {
                    apiGetDocuments(callBack,6,0);
                    // data=dataEmpty;
                    // console.log(resolve);
                }, function reject(reason) {
                    console.log('Something is wrong');
                    console.log(reason);
                });
        });

        data.section='rel_categories_document';

        arrayDocuments.forEach(function (document) {

                data.condition='id_document='+document.fileId;
                object.data=JSON.stringify(data);
                dataToDelete.ajax(object).then(function resolve(resolve) {
                    apiGetDocuments(callBack,6,0);
                    // data=dataEmpty;
                    // console.log(resolve);
                }, function reject(reason) {
                    console.log('Something is wrong');
                    console.log(reason);
                });
        });
        data=dataEmpty;
        $('.progress').hide();
    },

    /**
     *
     * @param arrayDocuments
     * @param apiGetDocuments
     * @param callBack
     */
    deleteDocuments(arrayDocuments,apiGetDocuments,callBack){

        var data;
        var array=[];

        arrayDocuments.forEach(function (document) {
            data={
                filePath:document.filePath
            };
            array.push(data);
        });

        var object={
            type: post,
            crossDomain: true,
            url: urlDeleteFileFromLocal,
            data:JSON.stringify(array)
        };
            this.ajax(object).then(function resolve(resolve) {
                dataToDelete.deleteDocumentFromDB(arrayDocuments,apiGetDocuments,callBack);
                console.log(resolve);
            }, function reject(reason) {
                console.log('Something is wrong');
                console.log(reason);
            });
    },

    /**
     *
     * @returns {Promise}
     */
    ajax: function (object) {
        return new Promise(function (resolve,reject) {
            $.ajax(object).done(resolve).fail(reject);
        });
    }
};


module.exports ={

    delete:dataToDelete

}
