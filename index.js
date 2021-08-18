var app = require('express')();
var http= require('http').Server(app);
var io=require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
    console.log('Un usaurio de ha conectado');

    var username;
    socket.on('crearUsuario', function(data)
    {
        username = data;
    });

    socket.on('mensajeNuevo', function(data)
    {
        socket.broadcast.emit('mensaje', {
            usuario: username,
            mensaje: data
        });
        
        socket.emit('mensaje', {
            usuario: username,
            mensaje: data
        });
    });
});

http.listen(3000, function(){
    console.log("Servidor en http://localhost:3000")
});
