/**
 * Created by oscar on 8/1/17.
 */
const post='post';
const urlQueriesManager = 'http://localhost/mandmin/server/dataBase/queries/QueriesManager.php';

var dataToDelete={

    /**
     *
     * @param id
     * @param callBack
     */
    categorie: function (id,callBack) {
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
