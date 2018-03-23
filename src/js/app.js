var $ = require('jquery');
var addMessage = require('./chat');

$(document).ready(function () {
    $('#chat-form').submit(addMessage);
});