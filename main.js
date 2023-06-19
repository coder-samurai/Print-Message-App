let messageInput = document.getElementById('MessageInput');
let countMessages = 0;
let message = document.getElementById('Message');


function SendMessage() {
    countMessages += 1;
    if (countMessages >= 10) {
        message.innerHTML = "";
        countMessages = 1;
    }
    if (messageInput.value == "") {
        message.innerHTML += "Please check the input!" + "<br>";
    } else {
        message.innerHTML += "<strong>Message: </strong>" + messageInput.value + "<br>";
        messageInput.value = "";
    }
}