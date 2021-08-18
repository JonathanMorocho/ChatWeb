// //console.log("Chat código");
// //io()
// const socket = io()

// let message = document.getElementById('message');
// let username = document.getElementById('username');
// let btn = document.getElementById('send');
// let output = document.getElementById('output');
// let actions = document.getElementById('actions');

// // btn.addEventListener('click', function () {
// //     console.log('se hizo click en SEND');
// // });

// // btn.addEventListener('click', function () {
// //     console.log(username.value, message.value );
// // });

// btn.addEventListener('click', function () {
//     socket.emit('chat:message',{
//         message: message.value,
//         username: username.value
//     });
//     console.log(username.value, message.value );
// });

// socket.on('chat:message',function(data){
//     //console.log(data);
//     output.innerHTML +=`
//     <p>
//         <strong>${data.username}</strong>: ${data.message} 
//     </p>`
// });