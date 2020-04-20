var socket = io.connect('http://localhost:8000');
socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });