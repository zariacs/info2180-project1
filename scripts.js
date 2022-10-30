/* Add your JavaScript to this file */

window.onload = function () {
    var emailForm = document.getElementsByTagName("form")[0];

    emailForm.addEventListener('submit', function (element) {
        element.preventDefault();

        // Removes any previous messages so there isn't an increasing stack of messages after multiple clicks
        clearMessage();

        var validationFailed = false;

        var userEmail = document.querySelector("#email");

        if (!isValidEmail(userEmail.value.trim()) || isEmpty(userEmail.value.trim())) {
            validationFailed = true;
            displayMessage(true);
        } else {
            displayMessage(false, userEmail.value.trim());
        }
    });
};

function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

function isEmpty(something) {
    if (something.length == 0) {
        return true;
    }
    return false;
}

function displayMessage(isInvalid, userEmail = '') {
    if (isInvalid) {
        message = `Please enter a valid email address.`;
    } else {
        message = `Thank you! Your email address ${userEmail} has been added to our mailing list!`;
    }

    var messageText = document.createTextNode(message);
    var messageBox = document.createElement('p');
    messageBox.appendChild(messageText);
    document.getElementsByClassName('message')[0].appendChild(messageBox);
}

function clearMessage() {
    pastMessages = document.getElementsByClassName('message')[0];
    pastMessages.innerHTML = "";
}

