
var socket = new WebSocket("ws://localhost:8765");
var message = document.getElementById('message');
var messageInput = document.getElementById('messageInput');

socket.onmessage = function(event) {
    var message = document.createElement('p');
    message.textContent = event.data;
    messages.appendChild(message);

};

function sendMessage() {
    var message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
}
