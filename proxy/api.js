
const post='POST';
const get='GET';
const urlQueriesManager = 'http://localhost/mandmin/server/dataBase/queries/QueriesManager.php';

/**
 *
 * @type {{createContentFolder: call.createContentFolder, createCategorie: call.createCategorie, ajax: call.ajax}}
 */
var call ={

    /**
     * function()
     */
    createContentFolder: function (callBack) {

        var url= 'http://localhost/mandmin/server/files/CreateFolder.php';
        /**
         *
         * @type {{path: string, permissions: string, recursivePermissions: string}}
         * path include the folder name
         */
        var data={
            path: '../../content',
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
        },function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },
    /**
     *
     * @param form
     */
    createCategorie: function (callBack) {


            var form =$('.categorie_form').serializeArray();
           console.log(form);
           if(form[0].value){
            var dataPut = call.managerData(form);
            var data = {
                dataPutRequest: dataPut,
                type: 'insert',
                resultNumber: 0,
                section: 'categories',
                condition:''
            };
            var object = {
                type: post,
                crossDomain: true,
                url: urlQueriesManager,
                data: JSON.stringify(data)
            };
            call.ajax(object).then(function resolve(data) {
                call.getCategories(callBack);
                $('.categorie_form')[0].reset();
                $('.err').hide();
            },function reject(reason) {
                console.log('algo salio mal');
                console.log(reason);
            });

           }else{
              $('.err').show();
           }

    },


    /**
     * function()
     */
    getCategories: function(callBack){

        var dataRequest = {value:'*'};
        var array = [dataRequest];

        var request = call.managerData(array);

        var data ={
            dataPutRequest: request,
            type: 'select',
            resultNumber: 0,
            section:'categories',
            conditions:''
        };

        var object = {
            type: post,
            crossDomain: true,
            url: urlQueriesManager,
            data: JSON.stringify(data)
        };

        this.ajax(object).then(function resolve(data) {
            callBack(JSON.parse(data));
        },function reject(reason) {
            console.log('algo salio mal');
            console.log(reason);
        });
    },
    /**
     *
     * @param array
     * @returns {string}
     */
    managerData: function (array) {

        var dataPutRequest='';
        array.forEach(function (element) {
            dataPutRequest+=element.value+",";
        });

        return dataPutRequest.substr(0,(dataPutRequest.length)-1);
    },

    /**
     *
     * @param data
     * @param url
     * @param type
     */
    ajax: function (object) {

        return new Promise(function (resolve,reject) {
            $.ajax(object).done(resolve).fail(reject);
        });


    }

};

module.exports = {
    call: call,
};

