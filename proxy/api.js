
const post='POST';
const get='GET';
const put='PUT';

/**
 *
 * @type {{createContentFolder: call.createContentFolder, createCategorie: call.createCategorie, ajax: call.ajax}}
 */
var call ={

    /**
     * function()
     */
    createContentFolder: function () {

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

        this.ajax(JSON.stringify(data),url,post);
    },
    /**
     *
     * @param form
     */
    createCategorie: function (form) {
        var data = $(form).serialize();
        this.ajax
    },

    /**
     *
     * @param data
     * @param url
     * @param type
     */
    ajax: function (data, url, type) {

        $.ajax({
            type: type,
            crossDomain: true,
            url: url,
            data: data
        }).done(function (done) {
            console.log(done);
            return done;
        }).fail(function ( jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 0) {

                console.log('Not connect: Verify Network.');

            } else if (jqXHR.status === 404) {

                console.log('Requested page not found [404]');

            } else if (jqXHR.status === 500) {

                console.log('Internal Server Error [500].');

            } else if (textStatus === 'parsererror') {

                console.log('Requested JSON parse failed.');

            } else if (textStatus === 'timeout') {

                console.log('Time out error.');

            } else if (textStatus === 'abort') {

                console.log('Ajax request aborted.');

            } else {

                alert('Uncaught Error: ' + jqXHR.responseText);

            }

            return 'false';

        });

    }
};

module.exports = {
    call: call
};

