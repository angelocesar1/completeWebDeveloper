// input, button

var input = document.getElementById('userInput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.length > 0) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }
})