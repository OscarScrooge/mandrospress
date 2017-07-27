

var functions ={

    createContentFolder: function () {
        var data={
            datos: 'mydata'
        };

        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: 'http://localhost/mandmin/server/Files.php',
            data:  JSON.stringify(data)
        }).done(function (done) {
            console.log(done);
        }).fail(function ( jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 0) {

                alert('Not connect: Verify Network.');

            } else if (jqXHR.status === 404) {

                alert('Requested page not found [404]');

            } else if (jqXHR.status === 500) {

                alert('Internal Server Error [500].');

            } else if (textStatus === 'parsererror') {

                alert('Requested JSON parse failed.');

            } else if (textStatus === 'timeout') {

                alert('Time out error.');

            } else if (textStatus === 'abort') {

                alert('Ajax request aborted.');

            } else {

                alert('Uncaught Error: ' + jqXHR.responseText);

            }

        });
    }
};

module.exports = {
    functions: functions
};

