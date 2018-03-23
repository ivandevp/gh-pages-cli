var $ = require('jquery');
var moment = require('moment');

function addMessage(e) {
    e.preventDefault();
    
    var message = $('#message').val();
    var $message = $('<p />').text(message);

    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    var $sentDate = $('<strong />').text(' ' + date);

    $message.append($sentDate);

    $('#messages').append($message);
}

module.exports = addMessage;