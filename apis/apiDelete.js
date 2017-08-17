/**
 * Created by oscar on 8/1/17.
 */
const post='post';
const urlQueriesManager = 'http://localhost/mandmin/server/dataBase/queries/QueriesManager.php';


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
     * @param callBack
     */
    deleteFromCategories: function (arrayDocuments,arrayCategories,callBack) {

        $('.progress').show();


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

                call.ajax(object).then(function resolve(resolve) {
                    call.getDocuments(callBack);
                    data=dataEmpty;
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
