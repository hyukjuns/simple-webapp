const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('ip', '127.0.0.1');

app.get('/', function (req, res) {
    var client_ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    var host_ip = req.headers['host'] || req.socket.remoteAddress 
    var client_hearder_info = JSON.stringify(req.headers, null, 4);

    res.write('<h1> Client IP: '+client_ip+'</h1>');
    res.write('<h1> Host IP: '+host_ip+'</h1>');
    res.write('<h2> Request header info: </h2>\n');
    res.write('<p>'+client_hearder_info+'</p>');
    res.end();
    console.log(client_hearder_info);
});

app.listen(app.get('port'), app.get('ip'), function () {
    console.log('Example app linstening on port 3000!');
});
