const textField = document.getElementById('main-text');
const array = [
    "There is a little chance",
    "Yes",
    "No",
    "Maybe...",
    "99.9%",
    "I don't know",
    "50/50",
    "Possible",
    "Impossible",
    "Sorry. Wait for bad news",
    "Probably",
    "Stupid question",
    "God knows",
    "Yes, of course",
    "We can only hope that it's true",
    "Truth",
    "Lie",
    "This is the secret for all of us"
];

function tryLuck() {
    textField.innerHTML = (array[Math.floor(Math.random() * array.length)]);
}